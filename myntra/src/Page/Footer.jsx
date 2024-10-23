import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function Footer() {
    return (
        <>
            <Container className='footer py-4'>
                <Row className='row row-cols-4'>
                    <Col lg={3}>
                        <ul>
                            <h2>ONLINE SHOPPING</h2>
                            <li>Men</li>
                            <li>Women</li>
                            <li>Kids</li>
                            <li>Home & Living</li>
                            <li>Beauty</li>
                            <li>Gift Cards</li>
                            <li>Myntra Insider</li>
                        </ul>

                        <ul>
                            <h2>USEFUL LINKS</h2>
                            <li>Blog</li>
                            <li>Careers</li>
                            <li>Site Map</li>
                            <li>Corporate Information</li>
                            <li>Whitehat</li>
                            <li>Cleartrip</li>
                        </ul>
                    </Col>

                    <Col lg={3}>
                        <ul>
                            <h2>CUSTOMER POLICIES</h2>
                            <li>Contact Us</li>
                            <li>FAQ</li>
                            <li>T&C</li>
                            <li>Terms Of Use</li>
                            <li>Track Orders</li>
                            <li>Shipping</li>
                            <li>Cancellation</li>
                            <li>Returns</li>
                            <li>Privacy policy</li>
                            <li>Grievance Officer</li>
                        </ul>
                    </Col>

                    <Col lg={3}>
                        <h2>EXPERIENCE MYNTRA APP ON MOBILE</h2>
                        <div className='d-flex app_icon py-4'>
                            <img src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png" />
                            <img src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png" />
                        </div>
                    </Col>

                    <Col lg={3}>

                        <ul className='footer_inner'>
                            <li>

                                <img src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png" />
                                <p><strong>100% ORIGINAL</strong> guarantee for all products at myntra.com</p>
                            </li>

                            <li>

                                <img src="https://assets.myntassets.com/assets/images/retaillabs/2023/5/22/becb1b16-86cc-4e78-bdc7-7801c17947831684737106127-Return-Window-image.png" />
                                <p><strong>Return within 14days</strong> of receiving your order</p>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>

            <Container className='footer_end'>
                <h4>POPULAR SEARCHES</h4>
                <p>Dishant Patel | Men | Sports Shoes | Adidas | Arrow | Fila | Online Shopping |
                    Nike | Pepe Jeans | Puma | United Colors Of Benetton | Fastrack | Shorts | Being Human | Skirts |
                    Woodland | Supra | Dresses | Men Shopping | Women Shopping | Blazers | Sherwani | Online Shopping |
                    Men Olive Green & Cream Coloured | St  Rahul Raina | Saurabh Sharma | Clothing | Jewellery | T Shirts | Shoes | Bags |
                    Watches | Caps | Shirts | Backpacks | Puma Tshirts | Woodland Shoes | Titan Watches | Fastrack Watches | Wrangler Shirts |
                    Adidas Tshirts | Nike Shoes | Roadster Shirts | Casual Shoes | Running Shoes | Nike Sports Shoes | Jeans | Being Human shirts |
                    Converse Shoes | Cricket Shoes</p>
            </Container>

            <Container className='py-5'>
                <Row className='row row-cols-3'>
                <Col lg={4}>
                    <p>In case of any concern,<span style={{color:"blue"}}> Contact Us</span></p>
                </Col>
                <Col lg={4}>
                    <p>© 2024 www.myntra.com. All rights reserved.</p>
                </Col>
                <Col lg={4} className='text-end'>
                    <p>A Flipkart company</p>
                </Col>
                </Row>
            </Container>
        </>
    )
}

























