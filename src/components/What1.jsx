import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, Image, Button, ButtonToolbar } from 'react-bootstrap';
import './What.css';
import SimpleSlider from './Gallery.jsx';

export default class What1 extends Component {
    render() {
        return (
            <Grid className="grid" fluid>
                <Row>
                    <Link className="link" to="/menu"><Image src={require("./../assets/img/logo.svg")}/></Link>
                    <p className="logo">LOGO</p>
                </Row>
                <Row className="title">
                    <h1>Project 1</h1>
                </Row>
                <Row>
                    <Col xs={12} sm={8} md={8} lg={8}>
                    <Image className="image-what" style={{marginLeft:'-1em'}} src={require("./../assets/img/pic.png")} responsive fluid/>
                    </Col>
                    <Col xs={12} sm={4} md={4} lg={4} style={{padding:'1em'}}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. 
                            Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. 
                            Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, 
                            nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, 
                            felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget. 
                        </p>
                    </Col>
                </Row>
                <Row className="row-what">
                    <SimpleSlider />
                </Row>
                <Row className="row-what">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Aenean euismod bibendum laoreet. Proin gravida dolor sit 
                        amet lacus accumsan et viverra justo commodo. Proin sodales 
                        pulvinar sic tempor. Sociis natoque penatibus et magnis dis 
                        parturient montes, nascetur ridiculus mus. Nam fermentum, 
                        nulla luctus pharetra vulputate, felis tellus mollis orci, 
                        sed rhoncus pronin sapien nunc accuan eget.
                    </p>
                </Row>
                <hr style={{borderColor:'#000000'}}/>
                <Row className="row-what" style={{paddingBottom:'2em', paddingTop: '2em'}}>
                    <Button className="button-center" bsSize="large" bsStyle="info" href="/what2" >Next</Button>
                </Row>
            </Grid>
        )
    }
}