import React from 'react';

import Navbar from 'react-bootstrap/lib/Navbar';
import Search from '../Search/Search';

class Header extends React.Component {
    render() {
        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <span>All tokipona words</span>
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Search updateQuery={this.props.updateQuery}/>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Header;