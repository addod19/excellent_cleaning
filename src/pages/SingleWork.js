import React from 'react';

import Hero from '../components/Hero';
import Banner from '../components/Banner';
import defaultBcg from '../Images/clean2.jpeg';
import { Link } from 'react-router-dom';
import { WorkContext } from '../Context';

class SingleWork extends React.Component {

    constructor(props) {
        super(props);
        // console.log(this.props);
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        }
    }

    static contextType = WorkContext;

    // componentDidMount(){}
   
    render() {
        const { getWork } = this.context;
        const work = getWork(this.state.slug);
        if (!work) {
            return(
                <div className="error">
                    <h3>No such work available</h3>
                    <Link to='/' className="btn-primary" >
                        Back to works
                    </Link>
                </div>
            )
        }
        const { name, description, pets, size, capacity, price, extras, breakfast, images} = work;
        return(
            <Hero hero="roomsHero">
                <Banner title={`${name} excellent cleaning`}>
                    <Link to="/" className="btn-primary">
                        Back to works
                    </Link>
                </Banner>
            </Hero>
        )
    }
}

export default SingleWork;