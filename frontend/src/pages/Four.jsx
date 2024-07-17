import React from 'react';
import './Four.css';
import reservationImage from '../images/reservation.jpg';

const Book = () => {
  return (
    <section id="Four" className="book-a-table">
      <div className="container" data-aos="fade-up">

        <div className="section-header">
          <h2 id='bookH'>Book A Table</h2>
          
        </div>

        <div className="row g-0">

          <div className="col-lg-4 reservation-img" style={{ backgroundImage: `url(${reservationImage})` }} data-aos="zoom-out" data-aos-delay="100"></div>

          <div className="col-lg-8 d-flex align-items-center reservation-form-bg">
            <form action="" method="post" role="form" className="php-email-form" data-aos="fade-up" data-aos-delay="100">
              <div className="row gy-4">
                <div className="col-lg-4 col-md-6">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div className="validate"></div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                  <div className="validate"></div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <input type="text" className="form-control" name="phone" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div className="validate"></div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <input type="text" name="date" className="form-control" id="date" placeholder="Date" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div className="validate"></div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <input type="text" className="form-control" name="time" id="time" placeholder="Time" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div className="validate"></div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <input type="number" className="form-control" name="people" id="people" placeholder="# of people" data-rule="minlen:1" data-msg="Please enter at least 1 chars" />
                  <div className="validate"></div>
                </div>
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" rows="5" placeholder="Message"></textarea>
                <div className="validate"></div>
              </div>
              <div className="mb-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your booking request was sent. We will call back or send an Email to confirm your reservation. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Book a Table</button></div>
            </form>
          </div>

        </div>
<br />
      </div>
    </section>
  );
}

export default Book;
