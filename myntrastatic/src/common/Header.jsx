import React from 'react'
import log from '../Images/myntra.png';

import { Col, Container, Row } from 'react-bootstrap'

function Header() {
    return (
        <Container fluid className='header'>

            <Row className='main-menu'>
                <Col lg={1} className='py-4 ps-4 ms-3'>
                  <img className='log' src={log} width='53px' height='36' />
                </Col>

                <Col lg={5}>
                    <ul className='d-flex primary-menu'>
                        <li>MEN</li> 
                        <li>WOMEN</li>
                        <li>KIDS</li>
                        <li>HOME & LIVING</li>
                        <li>BEAUTY</li>
                        <li>Studio<sup>NEW</sup></li>
                    </ul>
                </Col>
            </Row>

        </Container>
    )
}

export default Header