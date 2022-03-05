import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import { SideMenu } from './Components/TopBar.js';
import { Foot } from './Components/Footer.js';
import { Web, Admin, Dev, Seo } from './Components/ModalContents.js'

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


function Portal() {

    return (
        <div style={{ backgroundColor: '#3F0071' }}>
            <SideMenu />
            <Container fluid>
                <Row className='mt-5'>
                    <Col className='mt-5' style={{ backgroundColor: '#3F0071' }}>
                        <Web />
                    </Col >
                    <Col className='mt-5' style={{ backgroundColor: '#3F0071' }}>
                        <Admin />
                    </Col>
                    <Col className='mt-5' style={{ backgroundColor: '#3F0071' }}>
                        <Dev />
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col className='mt-5' style={{ backgroundColor: '#3F0071' }}>
                        <Seo />
                    </Col>

                </Row>
            </Container>
            <Foot />
        </div>
    );
}


class Main extends Component {
    render() {
        return (
            < >
                <Portal />

            </>
        )
    }
}




ReactDOM.render(<Main />, document.getElementById("root"));

