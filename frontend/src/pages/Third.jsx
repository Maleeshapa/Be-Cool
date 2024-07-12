import React, { useState, useEffect } from 'react';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';
import './Third.css';

const Third = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [cart, setCart] = useState({});
  const [menuItems, setMenuItems] = useState({ MilkShake: [], Smoothie: [] });
  const [allItems, setAllItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8081/Products');
        const data = await response.json();
        const milkshakeItems = data.filter(item => item.category === 'Milkshake');
        const smoothieItems = data.filter(item => item.category === 'Smoothie');
        setMenuItems({ MilkShake: milkshakeItems, Smoothie: smoothieItems });
        setAllItems([...milkshakeItems, ...smoothieItems]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData();
  }, []);

  useEffect(() => {
    const lightbox = GLightbox({
      selector: '.glightbox',
    });
    return () => lightbox.destroy(); // Cleanup on unmount
  }, []);

  const handleAdd = (id) => {
    setCart((prevCart) => ({
      ...prevCart,
      [id]: Math.min((prevCart[id] || 0) + 1, 3),
    }));
  };

  const handleRemove = (id) => {
    setCart((prevCart) => ({
      ...prevCart,
      [id]: Math.max((prevCart[id] || 0) - 1, 0),
    }));
  };

  return (
    <section id="Third" className="menu">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Our Menu</h2>
        </div>

        <ul className="nav nav-tabs d-flex justify-content-center" data-aos="fade-up" data-aos-delay="200">
          {['All', ...Object.keys(menuItems)].map((tab) => (
            <li className="nav-item" key={tab}>
              <a
                className={`nav-link ${activeTab === tab ? 'active show' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                <h4>{tab.charAt(0).toUpperCase() + tab.slice(1)}</h4>
              </a>
            </li>
          ))}
        </ul>

        <div className="tab-content" data-aos="fade-up" data-aos-delay="300">
          {['All', ...Object.keys(menuItems)].map((tab) => (
            <div className={`tab-pane fade ${activeTab === tab ? 'active show' : ''}`} id={`menu-${tab}`} key={tab}>
              <div className="tab-header text-center">
                <h3>{tab.charAt(0).toUpperCase() + tab.slice(1)}</h3>
              </div>
              <div className="row gy-5">
                {(tab === 'All' ? allItems : menuItems[tab]).map((item) => (
                  <div className="col-lg-4 menu-item" key={item._id}>
                    <a href={item.url} className="glightbox">
                      <img src={item.url} className="menu-img img-fluid" alt={item.name} />
                    </a>
                    <h4>{item.name}</h4>
                    <p className="price">Rs. {item.price}</p>
                    <div className="cart-controls">
                      <button onClick={() => handleRemove(item._id)}>-</button>
                      <span>{cart[item._id] || 0}</span>
                      <button onClick={() => handleAdd(item._id)}>+</button>
                    </div>
                    <br />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Third;
