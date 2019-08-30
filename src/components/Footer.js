import React, {Component} from 'react';
import {Navbar, Nav, Image, Button} from 'react-bootstrap';

class Footer extends Component {

    state = {};

    render() {
        return (
            <span>
            <br/>
                <Navbar className="header row" bg="dark" variant="dark">
                    <Nav className="mr-auto">
                        <Nav.Link className="text-muted left" href="#FAQ">FAQ</Nav.Link>
                        <Nav.Link className="text-muted left-half down" href="#support">Support</Nav.Link>
                    </Nav>
                    <Nav className="mr-auto">
                        <img width="76x"
                             src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/PEGI_3.svg/426px-PEGI_3.svg.png"/>
                        <img className="left-half" width="72px"
                             src="https://www.esrb.org/wp-content/uploads/2019/04/Category.svg"/>

                    </Nav>
                </Navbar>
                </span>
        );
    }
}

export default Footer;