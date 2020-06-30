import React from 'react';
import PropTypes from 'prop-types';

import './Hero.css';

const Hero = ( {children, hero} ) => {
    return(
        <header className={hero}>
            { children }
        </header>
    )
}

Hero.defaultProps = {
    hero: 'defaultHero',
};

Hero.propTypes = {
    hero: PropTypes.string
}

export default Hero;