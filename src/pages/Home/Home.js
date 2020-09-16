import React from 'react';
import { Link } from 'react-router-dom';

import Hero from '../../components/Hero';
import Banner from '../../components/Banner';
import Services from '../../components/Services';
import OurWork from '../../components/OurWork';

const Home = () => {
    return(
        <>
            <Hero>
                <Banner title='A.E APPLE CLEANING Co. LTD' subtitle="As low as $70">
                    <Link to='about' className='btn-primary'>
                        A.E APPLE CLEANING Co. LTD
                    </Link>
                </Banner>
            </Hero>
            <Services />
            <OurWork />
        </>
    )
}

export default Home;