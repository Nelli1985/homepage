import React, { Component } from 'react'
import Navbar from './../ui/navigation/CustomNavbar.jsx';
import { Grid, Row, Col } from 'react-bootstrap';
import './Where.css';
import Form from './Form.jsx';

export default class Stories extends Component {
    render() {
        return (
            <Grid fluid>
                <Row>
                    <Navbar />
                </Row>
                <Row className="row-where">
                    <p class="text-center">Kastani 42, 50410 Tartu</p>
                    <p class="text-center">5668 5602</p>
                    <p class="text-center">wpihor@gmail.com</p>
                </Row>
                <Row className="row-where">
                    <Col xs={12} md={6}>
                        <Form />
                    </Col>
                    <Col xs={12} md={6}>
                        <p>Google map will be here</p>
                    </Col>
                </Row>
            </Grid>
        )
    }
}