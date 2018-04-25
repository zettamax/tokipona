import React from 'react';

import Navbar from 'react-bootstrap/lib/Navbar';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';

class Search extends React.Component {
    handleChange(e) {
        this.props.updateQuery(e.target.value);
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
                                         onChange={this.handleChange.bind(this)}/>
                        </FormGroup>
                    </Form>
                </Navbar.Form>
            </div>
        );
    }
}

export default Search;