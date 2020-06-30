import React from 'react';
import { Link } from 'react-router-dom';

import Hero from '../../components/Hero';
import Banner from '../../components/Banner';

const Home = () => {
    return(
        <>
            <Hero>
                <Banner title='Excellent Cleaning' subtitle="As low as $70">
                    <Link to='about' className='btn-primary'>
                        Excellent Cleaning
                    </Link>
                </Banner>
            </Hero>
            
        </>
    )
}

export default Home;