import React from 'react';

import Navbar from 'react-bootstrap/lib/Navbar';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {}

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <Navbar.Form pullRight>
                    <Form inline onSubmit={this.handleSubmit}>
                        <FormGroup controlId="query">
                            <ControlLabel>Filter:</ControlLabel>{' '}
                            <FormControl type="text" placeholder="some word..." autoFocus
                                         value={this.state.value} onChange={this.handleChange}/>
                        </FormGroup>
                    </Form>
                </Navbar.Form>
            </div>
        );
    }
}

export default Search;