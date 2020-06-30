 
import React from 'react';

import items from './data';

const WorkContext = React.createContext();

class WorkProvider extends React.Component {

    state = {
        works: [],
        sortedWorks: [],
        ourWorks: [],
        loading: true 
    };

    componentDidMount() {
        let works = this.formatData(items);
        let ourWorks = works.filter( work=> work.featured === true);

        this.setState( {
            works,
            ourWorks,
            sortedWorks: works,
            loading: false
        });
    }

    formatData(items) {
        let tempItems = items.map( item => {
            let id = item.sys.id;
            let images = item.fields.images.map( image => image.fields.file.url);

            let work = { ...item.fields, images, id };

            return work;
        });

        return tempItems;
    }

    getWork = slug => {
        let tempWorks = [...this.state.works];
        const work = tempWorks.find( work => work.slug === slug )

        return work;
    }

    render() {
        return(
            <>
                <WorkContext.Provider value={ {...this.state, getWork: this.getWork} }>
                    { this.props.children }
                </WorkContext.Provider>
            </>
        )
    }
}

const WorkConsumer = WorkContext.Consumer;

export { WorkProvider, WorkConsumer, WorkContext };