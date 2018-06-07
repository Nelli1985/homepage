import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css';

export default class CustomNavbar extends Component {
    handleClick = () => {
        console.log('this is:', this);
    }
    render() {
        return (
            <Navbar collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">WebstateLogo</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
            <Navbar.Collapse>
                <Nav style={{flex: 1, flexDirection: 'row'}}>
                    <NavItem eventKey={1} componentClass={Link} href="/" to="/who">
                        Who?    
                    </NavItem>
                    <NavItem eventKey={2} componentClass={Link} href="/" to="/what">
                        What?
                    </NavItem>
                    <NavItem eventKey={3} componentClass={Link} href="/" to="/where" >
                        Where?
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>    
        )
    }
}
