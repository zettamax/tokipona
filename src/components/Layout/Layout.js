import React from 'react';

import Grid from 'react-bootstrap/lib/Grid';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Button from 'react-bootstrap/lib/Button';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <span>All tokipona words</span>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Navbar.Form>
                        <Form inline>
                            <FormGroup controlId="query">
                                <ControlLabel>Filter:</ControlLabel>{' '}
                                <FormControl type="text" placeholder="some word..." autoFocus />
                            </FormGroup>{' '}
                        </Form>
                    </Navbar.Form>
                </Navbar.Collapse>
            </Navbar>
            <Grid>
                {children}
            </Grid>
        </div>
    );
};

export default Layout;