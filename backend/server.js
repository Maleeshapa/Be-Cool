// --------------------------------------------------Basic--------------------------------------------------

import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:3000', 'https://deploy-mern.vercel.app'] // Replace with your frontend URL
    methods: ["POST","GET"],
    credentials:true
}));


const uri = process.env.MONGO_URI;

mongoose.connect(uri)
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log('MongoDB connection error:', err));

const PORT = 8081;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

//--------------------------------------------------

const adminSchema = new mongoose.Schema({
    
    email: String,
    password: String
});


const Admin = mongoose.model('Admin', adminSchema);

// ---------------------------------------------------Create-----------------------------------------------


app.post('/AdminCreate', async (req, res) => {
    const {  email,password } = req.body;
    try {
        const newAdmin = new Admin({ email,password });
        const result = await newAdmin.save();
        console.log("Record inserted successfully");
        res.json({ success: true, result: result });
    } catch (err) {
        console.error('Error inserting student:', err);
        res.status(500).json({ success: false, error: err.message });
    }
});

//-------------------------------------------------

// ---------------------------------------------------Read all db---------------------------------------------------

app.get('/Dashboard', async (req, res) => {
    try {
        const admin = await Admin.find({});
        res.json(admin);
    } catch (err) {
        console.error('Error fetching Admins:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});


// -----------------------------------------------------------Delete--------------------------------------------


app.delete('/delete/:id', async (req, res) => {
    try {
        const result = await Admin.findByIdAndDelete(req.params.id);
        if (!result) {
            return res.status(404).json({ error: 'Admin not found' });
        }
        res.json({ success: true });
    } catch (err) {
        console.error('Error deleting admin:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});



// --------------------------------------------------Schemas--------------------------------------------------

const milkshakeSchema = new mongoose.Schema({
    name: String,
    price: String,
    url: String,
    category: { type: String, default: 'Milkshake' }
});

const smoothieSchema = new mongoose.Schema({
    name: String,
    price: String,
    url: String,
    category: { type: String, default: 'Smoothie' }
});

const Milkshake = mongoose.model('Milkshake', milkshakeSchema);
const Smoothie = mongoose.model('Smoothie', smoothieSchema);

// ---------------------------------------------------Create products-----------------------------------------------

app.post('/ProductsCreate', async (req, res) => {
    const { name, price, url, category } = req.body;
    try {
        if (category === 'Milkshake') {
            const newMilkshake = new Milkshake({ name, price, url, category });
            const result = await newMilkshake.save();
            console.log("Milkshake inserted successfully");
            res.json({ success: true, result: result });
        } else if (category === 'Smoothie') {
            const newSmoothie = new Smoothie({ name, price, url, category });
            const result = await newSmoothie.save();
            console.log("Smoothie inserted successfully");
            res.json({ success: true, result: result });
        } else {
            res.status(400).json({ success: false, error: 'Invalid category' });
        }
    } catch (err) {
        console.error('Error inserting product:', err);
        res.status(500).json({ success: false, error: err.message });
    }
});

// ---------------------------------------------------Read all products---------------------------------------------------

app.get('/Products', async (req, res) => {
    try {
        const milkshakes = await Milkshake.find({});
        const smoothies = await Smoothie.find({});
        res.json([...milkshakes, ...smoothies]);
    } catch (err) {
        console.error('Error fetching products:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// -----------------------------------------------------------Delete--------------------------------------------

app.delete('/Products/delete/:id', async (req, res) => {
    const { category } = req.body;
    try {
        let result;
        if (category === 'Milkshake') {
            result = await Milkshake.findByIdAndDelete(req.params.id);
        } else if (category === 'Smoothie') {
            result = await Smoothie.findByIdAndDelete(req.params.id);
        } else {
            return res.status(400).json({ error: 'Invalid category' });
        }

        if (!result) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.json({ success: true });
    } catch (err) {
        console.error('Error deleting product:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});
