import React, {Component} from 'react';
import {Navbar, Nav, Image, Button} from 'react-bootstrap';

class Navigation extends Component {

    state = {};

    render() {
        return (
            <span>
            <Navbar className="header row" bg="dark">
                    <Navbar.Brand href="https://dovetailgames.com/">
                        <Image width="80%" className="logo"
                               src="https://s3-eu-west-1.amazonaws.com/assets.dovetailgames.com/wp-content/uploads/2019/02/20171828/cropped-Dovetail_stack_flat_greytext11-300x98.png"
                               fluid/>
                    </Navbar.Brand>
                    <Navbar.Brand href="https://live.dovetailgames.com">
                        <Image width="35%" className="logo"
                               src="https://live.dovetailgames.com/images/franchise_banner_live_tagline_2.png" fluid/>
                    </Navbar.Brand>
                    <Nav.Link href="https://live.dovetailgames.com/auth/login?returnPath=/"
                              className="text-muted left ">
                        Log in to Dovetail Live
                    </Nav.Link>
                </Navbar>
                <Navbar sticky="top" className="header row" bg="dark" variant="dark">
                    <Nav className="mr-auto">
                        <Nav.Link className="btn btn-secondary" href="/">Home</Nav.Link>
                        <Nav.Link className="btn btn-secondary" href="#Stats">Stats</Nav.Link>
                        <Nav.Link className="btn btn-secondary" href="#Games">Games</Nav.Link>
                        <Nav.Link className="btn btn-secondary" href="#Achievements">Achievements</Nav.Link>
                    </Nav>
                    <Nav className="mr-auto">
                        <Nav.Link className="text-muted left" href="#FAQ">FAQ</Nav.Link>
                        <Button variant="primary btn-arrow btn-arrow-r btn-lg" href="#Submit">
                            <span>Submit a Video</span>
                        </Button>
                    </Nav>
                </Navbar>
                </span>
        );
    }
}

export default Navigation;