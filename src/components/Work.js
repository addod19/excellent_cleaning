 
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import myDefault from '../Images/clean1.jpeg';
// import { FaShapes } from 'react-icons/fa';


const Work = ( {work}) => {
    
    const { name, slug, price, images } = work;
    

    return(
        <article className="room">
            <div className="img-container">
                <img src={images[0] || myDefault} alt="single room" />
                <div className="price-top">
                    <h6>${price}</h6>
                    <p>per hour</p>
                </div>
                <Link to={`/rooms/${slug}`} className="btn-primary room-link">
                    Sample Work
                </Link>
            </div>
            <p className="room-info"> { name } </p>
        </article>
    )
}

Work.propTypes = {
    work : PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        price: PropTypes.number.isRequired
    })
}

export default Work;