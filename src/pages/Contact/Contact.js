import React from 'react';

import Hero from '../../components/Hero';
import { Link } from 'react-router-dom';
import Banner from '../../components/Banner';

import AboutDetails from '../../components/AboutDetails';

const Contact = () => {
    return(
        <>
            <Hero hero="contactHero">
                <Banner title='Contact Excellent Cleaning' subtitle="kindly call +233240071212">
                    <Link to='about' className='btn-primary'>
                        Contact Us
                    </Link>
                </Banner>
            </Hero>
            <AboutDetails />
        </>
    )
}

export default Contact;