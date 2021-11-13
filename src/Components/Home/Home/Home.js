import React from 'react';
import About from '../../About/About';
import Contact from '../../Contact/Contact';
import Footer from '../../Footer/Footer';
import Review from '../../Review/Review';
import Banner from '../Banner/Banner';
import Navigation from '../Navigation/Navigation';
import ReviewHome from '../ReviewHome/ReviewHome';
import ServicesHome from '../ServicesHome/ServicesHome';

const Home = () => {
    return (
    
        <div>
      <Navigation/>
            <Banner/>
            <ServicesHome/>
            <br/>
            <ReviewHome/>
            <About/>
            <Contact/>
            <Footer/>
            </div>
                        

    );
};

export default Home;