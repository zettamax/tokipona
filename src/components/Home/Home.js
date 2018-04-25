import React from 'react';

import Header from '../Header/Header';
import Grid from 'react-bootstrap/lib/Grid';
import Wordlist from "../Wordlist/Wordlist";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        };
    }

    updateQuery(query) {
        this.setState({
            query: query
        });
    }

    render() {
        return (
            <div>
                <Header updateQuery={this.updateQuery.bind(this)} />
                <Grid>
                    <Wordlist query={this.state.query} />
                </Grid>
            </div>
        );
    }
}

export default Home;