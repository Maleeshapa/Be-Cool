import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Third from './pages/Third';
import Cart from './pages/Cart';
import Dashboard from './pages/Admin/Dashboard';
import AdminCreate from './pages/Admin/AdminCreate';
import Products from './pages/Admin/Products';
import ProductsCreate from './pages/Admin/ProductsCreate';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/Be-Cool' element={<Home />} />
          <Route path='/Third' element={<Third />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/AdminCreate' element={<AdminCreate />} />
          <Route path='/Products' element={<Products />} />
          <Route path='/ProductsCreate' element={<ProductsCreate />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
