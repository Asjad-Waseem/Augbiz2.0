import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import GenericButton from '../../common/GenericButton';
import FooterBottomStatic from '../../common/footer/FooterBottomStatic';
import FooterBottomLinks from '../../common/footer/FooterBottomLinks';

import './Footer.css';

function Footer() {
    return (

        <footer className= "ftr mt-5 p-4 text-center">
            <p className = "ftr__heading mt-1 mb-4">We are always thinking about the future of business</p>
            <Link to = "/start-new-coversation">
                <GenericButton text = "Start a conversation" />
            </Link>
            <Container className = "mt-5">
                <Col md>
                    <Row>
                        <Col sm>
                            <FooterBottomStatic title = "CONTACT" text1 = "Karthik@augbiz.in" text2 = "+91 9999997080" />
                        </Col>
                        <Col sm>
                            <FooterBottomStatic title = "FIND US" text1 = "#111 Block 4" text2 = "HSR-1 Bangalore" />
                        </Col>
                        <Col sm>
                            <FooterBottomLinks linkRoute1 = "/categories" linkRoute2 = "/for-vendors" title = "LINKS" text1 = "CATEGORIES" text2 = "FOR VENDORS" />
                        </Col>
                        <Col sm className = "follow__us">
                            <FooterBottomLinks linkRoute1 = "/linked-in" linkRoute2 = "/instagram" title = "FOLLOW US" text1 = "LinkedIn" text2 = "Instagram" />
                        </Col>                   
                    </Row>
                </Col>
            </Container>
        </footer>
        
    );
}

export default Footer;
