import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import fsg2g from '../img/fsg2g.png';
import sagoogle from '../img/sagoogle.jpg';
import dodrib from '../img/dodrib.png';
import seoreact from '../img/seoreact.png';


export function Web() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Card className="d-flex mx-auto" style={{ width: '18rem', backgroundColor: '#C70039' }}>
                <Card.Img variant="top" src={fsg2g} />
                <Card.Body>
                    <Card.Title>Full Stack Developement</Card.Title>
                    <Card.Text>
                        Covering all major languages and frame works to get the job the way you want it
                    </Card.Text>
                    <Button variant="primary" onClick={handleShow}>More</Button>
                </Card.Body>
            </Card>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title><p>Client and Server Professionalism</p></Modal.Title>
                </Modal.Header>
                <Modal.Body>Please update lol</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export function Admin() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Card className="d-flex mx-auto" style={{ width: '18rem', backgroundColor: '#C70039' }}>
            <Card.Img variant="top" src={sagoogle} />
            <Card.Body>
                <Card.Title>Server Administration</Card.Title>
                <Card.Text>
                    Maximize your performance at affordable cost
                </Card.Text>
                <Button variant="primary" onClick={handleShow}>More</Button>
            </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose} id="Admin">
                <Modal.Header closeButton>
                    <Modal.Title>Cloud / Server</Modal.Title>
                </Modal.Header>
                <Modal.Body>More Context</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export function Dev() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Card className="d-flex mx-auto" style={{ width: '18rem', backgroundColor: '#C70039' }}>
            <Card.Img variant="top" src={dodrib} />
            <Card.Body>
                <Card.Title>Site Reliance</Card.Title>
                <Card.Text>
                    Ensure all updates and latest technology needs roll out smooth
                </Card.Text>
                <Button variant="primary" onClick={handleShow}>More</Button>
            </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose} id="Dev">
                <Modal.Header closeButton>
                    <Modal.Title>Dev-Ops Enggineering</Modal.Title>
                </Modal.Header>
                <Modal.Body>More Context</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export function Seo() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Card className="d-flex mx-auto" style={{ width: '18rem', backgroundColor: '#C70039' }}>
            <Card.Img variant="top" src={seoreact} />
            <Card.Body>
                <Card.Title>Search Engines</Card.Title>
                <Card.Text>
                    Be located by customers on google <strong>Organically!</strong>
                </Card.Text>
                <Button variant="primary" onClick={handleShow}>More</Button>
            </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose} id="Dev">
                <Modal.Header closeButton>
                    <Modal.Title>SEO Engineering</Modal.Title>
                </Modal.Header>
                <Modal.Body>More Context</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}