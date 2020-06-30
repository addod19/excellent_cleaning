import React from 'react';

import { FaCopyright } from 'react-icons/fa';

const Footer = () => {

    return(
        <footer className="footer">
            <h3 className="footer-header"> <i src={FaCopyright}></i> my footer</h3>
        </footer>
    )
}

export default Footer;