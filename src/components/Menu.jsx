import React, { Component } from 'react'
import { Grid, Row, Col, Button } from 'react-bootstrap';
import './Menu.css';
import { Link } from 'react-router-dom'

export default class Menu extends Component {
    render() {
        return (
            <Grid fluid className="grid" fluid>
                <Row>
                    <Col>
                        <p className="logo">LOGO</p>
                    </Col>
                </Row>
                <ul className="menu">
                    <li className="menu-item"><Link className="menu-link" to="/">Landing</Link></li>
                    <li className="menu-item"><Link className="menu-link" to="/who">Who</Link></li>
                    <li className="menu-item"><Link className="menu-link" to="/what1">What</Link></li>
                    <li className="menu-item"><Link className="menu-link" to="/where">Contact</Link></li>
                </ul> 
            </Grid>
        )
    }
}