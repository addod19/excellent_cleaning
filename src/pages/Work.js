import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Banner from '../components/Banner';


const Works = () => {
    return(
        <Hero hero="roomsHero">
            <Banner title="We have exclusive presidential rooms" sutitle="$135">
                <Link to='/' className="btn-primary">
                    Return Home
                </Link>
            </Banner>
        </Hero>
    )
}

export default Works;