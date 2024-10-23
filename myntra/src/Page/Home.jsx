import React from 'react'
import banner from '../Images/banner.webp'
import her from '../Images/01.jpg';
import he from '../Images/02.webp';
import sponsor from '../Images/Sponsor-1.webp';
import coupons from '../Images/COUPONS-CORNER.webp';
import myntra from '../Images/MYNTRA100.webp';
import crazy from '../Images/Crazy-Deals.webp';
import Category from '../Images/cat.webp';
import knockout from '../Images/knockout.webp';
import { Card, Col, Container, Row } from 'react-bootstrap'
import {data} from '../Data/data';
import Header from './Header';
import Footer from './Footer';

export default function Home() {
    
    let allimages = data.map((v, i) => {
        // console.log(allimages);
        return(
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={v.img} />
        </Card>
        )
       
    })
    return (
        <>
        <Header/>
            <Container fluid className='p-0 m-0'>
                <img className='banner img-fluid' src={banner} />
            </Container>

            <Container className='heher'>
                <Row>
                    <Col lg={6} className='p-0'>
                        <a href='https://www.myntra.com/shop/women'>
                            <img className='banner img-fluid' src={her} /></a>
                    </Col>
                    <Col lg={6} className='p-0'>
                        <a href='https://www.myntra.com/shop/men'>
                            <img className='banner img-fluid' src={he} /></a>
                    </Col>
                </Row>
            </Container>

            <Container fluid className='p-0 m-0'>
                <img className='img-fluid' src={sponsor} />
            </Container>

            <Container fluid className='p-0 m-0'>
                <img className='img-fluid' src={coupons} />
            </Container>

            <Container fluid className='m-0'>
                <Row className='row row-lg-2 '>
                    <Col lg={6}>
                        <img className='img-fluid' src={myntra} />
                    </Col>
                    <Col lg={6}>
                        <img className='img-fluid' src={myntra} />
                    </Col>
                </Row>
            </Container>

            <Container fluid className='p-0 m-0'>
                <img className='img-fluid' src={crazy} />
            </Container>


            <Container fluid>
                <Row className='justify-content-between'>
                {allimages}
                </Row>
            </Container>
            
           
            <Container fluid className='p-0 m-0'>
                <img className='banner img-fluid' src={Category} />
            </Container>

            <Container fluid className='py-3 m-0'>
                <img className='banner img-fluid' src={knockout} />
            </Container>

            <Footer/>
        </>
    )
}
