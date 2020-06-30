import React from 'react';

import Hero from '../../components/Hero';
import { Link } from 'react-router-dom';
import Banner from '../../components/Banner';
import './About.css';

const About = () => {
    return(
        <>
            <Hero hero="aboutHero">
                <Banner title='About Excellent Cleaning' subtitle="Let us work together" className="alignB">
                    <Link to='about' className='btn-primary'>
                        About Us
                    </Link>
                </Banner>
            </Hero>
        </>
    )
}

export default About;