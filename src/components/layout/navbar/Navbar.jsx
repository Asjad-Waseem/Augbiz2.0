import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Button, Container } from 'react-bootstrap';

import AugbizLogo from '../../../assets/Augbiz Logo.svg';
import GenericButton from '../../common/GenericButton';

import './Navbar.css';

function GeneralNavbar() {

    return (

        <Navbar expand = "md" className = "nav__bar">

            <Container>

                <Navbar.Brand as = {Link} to = "/"><img className = "augbiz__logo" src = {AugbizLogo} alt = "augbiz-logo"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls = "responsive-navbar-nav"/>
                        <Navbar.Collapse id = "responsive-navbar-nav">

                            <Nav className = "ml-auto">

                                <Nav.Link as = {Link} to = "/Explore" className = "nav__link">Explore</Nav.Link>

                                <NavDropdown title="For vendors" id="basic-nav-dropdown" className = "nav__link">
                                    <NavDropdown.Item as = {Link} to = "/get-listed">Get listed</NavDropdown.Item>
                                    <NavDropdown.Item as = {Link} to = "/vendor-portal">Vendor portal</NavDropdown.Item>
                                </NavDropdown>

                                <NavDropdown title="Categories" id="basic-nav-dropdown" className = "nav__link">
                                    <NavDropdown.Item as = {Link} to = "/banking">Banking</NavDropdown.Item>
                                    <NavDropdown.Item as = {Link} to = "/marketing-seo">Marketing & SEO</NavDropdown.Item>
                                    <NavDropdown.Item as = {Link} to = "/content-creative">Content & Creative</NavDropdown.Item>
                                    <NavDropdown.Item as = {Link} to = "/design-dev">Design & dev</NavDropdown.Item>
                                    <NavDropdown.Item as = {Link} to = "/hiring-firms">Hiring firms</NavDropdown.Item>
                                </NavDropdown>

                            </Nav>

                            <Nav className = "ml-auto">

                                <Nav.Link as = {Link} to = "/login">
                                    <Button style = {{fontSize: "16px", fontFamily: "Hind", fontWeight: "500", letterSpacing: "0.023rem", backgroundColor: "#fcfcfc", color: "#334ac0", borderRadius: "5px", border: "1px solid #eee", paddingTop: "8px"}}>Login</Button>
                                </Nav.Link>

                                <Nav.Link as = {Link} to = "/signup">
                                    <GenericButton text = "Sign up here" />
                                </Nav.Link>

                            </Nav>

                        </Navbar.Collapse>

            </Container>

        </Navbar>
        
    );
}

export default GeneralNavbar;
