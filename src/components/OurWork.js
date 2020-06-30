import React from 'react';

import { WorkContext } from '../Context';
import Loading from '../components/Loading';
import Work from '../components/Work';
import Title from './Title';

class OurWork extends React.Component {

    static contextType = WorkContext;
    

    render() {
        let { loading, ourWorks: works } = this.context;

        works = works.map( work => {
            return <Work key={work.id} work={work} />
        })

        console.log(works);
        return(
            <section className="featured-rooms">
                <Title title="Our sample work" />
                <div className="featured-rooms-center">
                    { loading ? <Loading /> : works }
                </div>                
            </section>
        )
    }
}

export default OurWork;