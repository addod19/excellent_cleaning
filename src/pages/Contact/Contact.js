import React from 'react';

import Hero from '../../components/Hero';
import { Link } from 'react-router-dom';
import Banner from '../../components/Banner';

const Contact = () => {
    return(
        <>
            <Hero hero="contactHero">
                <Banner title='Contact Excellent Cleaning' subtitle="kindly call 0247439524">
                    <Link to='about' className='btn-primary'>
                        Contact Us
                    </Link>
                </Banner>
            </Hero>
            
        </>
    )
}

export default Contact;