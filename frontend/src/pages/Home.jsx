import React from 'react';
import Navbar from '../components/Navbar';
import './Home.css';
import Second from './Second';
import Third from './Third';
import Four from './Four';
import juice from '../images/Juice.png';

function Home() {
  return (
    <div>
      <section id='first'>
        <div className='home'>
          <Navbar />

          <div className='row container-fluid homeOne'>
            <div className='col-sm-12 col-md-6 col-lg-7'>
              <h1 className='homeh1'> Feeling Thirsty?<br />
                Get Ready To Hydrate </h1>
              <p id='homeP'>Book a table or Deliver to your Door Steps NOW!</p>
              <br />
              <div>
                <a
                  href="#Third"
                  className="btn btnOrder rounded-pill"
                >
                  Order Now
                </a>
                {' '}
                <a
                  href="#Four"
                  className="btn btnBook rounded-pill"
                >
                  Book a Table
                </a>
              </div>
            </div>

            <div className='col-sm-12 col-md-6 col-lg-5'>
              <img className='imgHome' src={juice} alt="juice" width={500} />
            </div>
          </div>
        </div>
      </section>
      <Second />
      <Third />
      <Four/>
    </div>
  );
}

export default Home;
