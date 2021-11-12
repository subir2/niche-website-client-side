import React from 'react';
import About from '../../About/About';
import Contact from '../../Contact/Contact';
import Footer from '../../Footer/Footer';
import Banner from '../Banner/Banner';
import Navigation from '../Navigation/Navigation';
import ServicesHome from '../ServicesHome/ServicesHome';

const Home = () => {
    return (
    
        <div>
      <Navigation/>
            <Banner/>
            <ServicesHome/>
            <About/>
            <Contact/>
            <Footer/>
            </div>
                        

    );
};

export default Home;