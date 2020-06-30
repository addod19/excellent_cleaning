import React from 'react';
import { FaCocktail, FaTheaterMasks, FaToolbox, FaShuttleVan, FaPeopleCarry } from 'react-icons/fa';

import Title from './Title';
import './Services.css';

class Services extends React.Component {

    state = {
        services: [
            {
                icon: <FaPeopleCarry />,
                title: 'Apartments Cleaning',
                info: 'We are experts in cleaning apartments, we are a call away',
            },
            {
                icon: <FaTheaterMasks />,
                title: 'Car Cleaning',
                info: 'We clean a variety of cars, sedan, SUV, 4*4',
            },
            {
                icon: <FaToolbox />,
                title: 'Mansion Cleaning',
                info: 'Call us so we make your mansions new again',
            },
            {
                icon: <FaShuttleVan />,
                title: 'Internal and External Cleaning',
                info: 'Everything that needs cleaning is done by us',
            }

        ]
    }

    render() {
        return(
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    { this.state.services.map( (item, index) => {
                        return <article key={index} className="service" >
                            <span>{item.icon}</span>
                            <h4>{item.title}</h4>
                            <p>{item.info}</p>
                        </article>
                    }
                    )}
                </div>
            </section>
        )
    }
}

export default Services;