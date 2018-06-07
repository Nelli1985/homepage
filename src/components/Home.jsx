import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Grid, Col, Row, Image } from 'react-bootstrap';
import './Home.css';


export default class Home extends Component {
    render() {
        return (
            <Grid className="show-grid" fluid>
                <Row className="show-row">
                    <Col xsHidden sm={4} md={4} lg={4} className="show-col">
                        <p className="home-logo">LOGO</p>
                        <Image className="image" src={require("./../assets/img/img1.jpg")} responsive fluid/>
                        {/* image source: https://pxhere.com/en/photo/1397716 */}
                    </Col>
                    <Col xs={12} sm={4} md={4} lg={4} className="show-col">
                        <Link className="link" to="/menu"><Image src={require("./../assets/img/logo.svg")}/></Link> 
                        <Image className="image" src={require("./../assets/img/img2.jpg")} responsive fluid/>
                        {/* image source: https://pxhere.com/en/photo/19837 */}
                    </Col>
                    <Col xsHidden sm={4} md={4} lg={4} className="show-col">
                        <Image className="image" src={require("./../assets/img/img3.jpg")} responsive fluid/>
                        {/* image source: https://pxhere.com/en/photo/676233 */}
                    </Col>
                </Row>
                <Row className="home-text">
                    <Col>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Aenean euismod bibendum laoreet. Proin gravida dolor sit
                            amet lacus accumsan et viverra justo commodo.
                        </p>
                    </Col>
                </Row>
            </Grid>    
        )
    }
}