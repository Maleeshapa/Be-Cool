import React, { useEffect } from 'react';
import CountUp from 'react-countup';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Second.css';

function Second() {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1 second
    }, []);

    return (
        <section id='second'>
            <div className='Second container-fluid counts section-bg'>
                <br /><br />
                <div className="row justify-content-end">
                    <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
                        <div className="count-box">
                            <CountUp start={0} end={2400} duration={5} className="purecounter" /><br />
                            <p>Happy Customers</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
                        <div className="count-box">
                            <CountUp start={0} end={3400} duration={5} className="purecounter" /><br />
                            <p>Drinks Served</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
                        <div className="count-box">
                            <CountUp start={0} end={10} duration={5} className="purecounter" /><br />
                            <p>Years of Experience</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
                        <div className="count-box">
                            <CountUp start={0} end={8} duration={5} className="purecounter" /><br />
                            <p>Awards</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Second;
