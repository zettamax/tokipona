import React from 'react';

import Grid from 'react-bootstrap/lib/Grid';
import Navbar from 'react-bootstrap/lib/Navbar';

import Search from '../Search/Search';

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
                    <Search />
                </Navbar.Collapse>
            </Navbar>
            <Grid>
                {children}
            </Grid>
        </div>
    );
};

export default Layout;