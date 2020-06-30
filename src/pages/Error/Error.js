 
import React from 'react';
import { Link } from 'react-router-dom';

import Hero from '../../components/Hero';
import Banner from '../../components/Banner';

const Error = () => {
    return(
        <Hero>
            <Banner title="Page not found" subtitle="Error" >
                <Link to='/contact' className="btn-primary">
                    Contact Us
                </Link>
            </Banner>
        </Hero>
    )
}

export default Error;