import React, { Component } from 'react'
import { Grid, Row, Col, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Who.css';

export default class About extends Component {
    render() {
        return (
            <Grid className="grid" fluid>
                <Row>
                    <Link className="link" to="/menu"><Image src={require("./../assets/img/logo.svg")}/></Link>
                    <p className="logo">LOGO</p>
                </Row>
                <Row className="row-who">
                    <Col xs={12} sm={4} md={4} lg={4} className="col-low">
                        <p>Integer accumsan lobortis nulla feugiat tincidunt. 
                            Praesent sed lacus eu lacus pharetra suscipit at et ipsum. 
                            Vestibulum ullamcorper venenatis porta. Aliquam hendrerit, 
                            enim eu gravida sollicitudin, dui nibh dapibus elit. 
                        </p>
                    </Col>
                    <Col xs={12} sm={4} md={4} lg={4} style={{marginTop:'-1em'}}>
                        <Image className="image-one"src={require("./../assets/img/pic.png")} responsive fluid/>
                        {/* image source: https://commons.wikimedia.org/wiki/File:Picture_icon-72a7cf.svg */}
                    </Col>
                    <Col xs={12} sm={4} md={4} lg={4} className="col-low">
                        <p>Integer accumsan lobortis nulla feugiat tincidunt. 
                            Praesent sed lacus eu lacus pharetra suscipit at et ipsum. 
                            Vestibulum ullamcorper venenatis porta. Aliquam hendrerit, 
                            enim eu gravida sollicitudin, dui nibh dapibus elit.
                        </p>
                    </Col>
                </Row>
                <Row className="row-who">
                    <Col xs={12} sm={4} md={4} lg={4}>
                        <Image className="image-who" src={require("./../assets/img/pic.png")} responsive fluid/>
                        {/* image source: https://commons.wikimedia.org/wiki/File:Picture_icon-72a7cf.svg */}
                    </Col>
                    <Col xs={12} sm={4} md={4} lg={4} className="col-low2">
                        <p>Integer accumsan lobortis nulla feugiat tincidunt. 
                            Praesent sed lacus eu lacus pharetra suscipit at et ipsum. 
                            Vestibulum ullamcorper venenatis porta. Aliquam hendrerit, 
                            enim eu gravida sollicitudin, dui nibh dapibus elit. 
                        </p>
                    </Col>
                    <Col xs={12} sm={4} md={4} lg={4}>
                        <Image className="image-who" src={require("./../assets/img/pic.png")} responsive fluid/>
                        {/* image source: https://commons.wikimedia.org/wiki/File:Picture_icon-72a7cf.svg */}
                    </Col>
                </Row>
            </Grid>
        )
    }
}