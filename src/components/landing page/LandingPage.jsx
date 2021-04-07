import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Dropdown, Form, FormControl, Button } from 'react-bootstrap';
import { AiOutlineSearch, AiFillPlayCircle } from 'react-icons/ai';

import Navbar from '../layout/navbar/Navbar';

import Card  from '../common/CardComponent';
import GenericButton  from '../common/GenericButton';
import EmptyCard from './EmptyCard';
import KnowMoreCard from '../common/know more cards/KnowMoreCard';

import Footer from '../layout/footer/Footer';

import FinancesAndBanking from '../../assets/homepage/categories/Fin & banking.svg';
import MarketingAndSEO from '../../assets/homepage/categories/Marketing seo.svg';
import ContentAndCreative from '../../assets/homepage/categories/Creative.svg';
import DesignAndDev from '../../assets/homepage/categories/Dev.svg';
import HiringFirms from '../../assets/homepage/categories/Hiring firms.svg';

import './LandingPage.css';

function getWindowDimensions() {
    const { innerWidth: width } = window;
    return {
      width
    };
  }

function LandingPage() {

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
          setWindowDimensions(getWindowDimensions());
        }
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);

      const width = windowDimensions.width;

    return (

        <div className = "landing__page">

            <Navbar />

                <Container>

                    <Row>

                        <Col md = "12" className = "text-center">
 
                            <br/>
                            <br/>

                            <h1 className = "new__way mt-5">The new way to do business</h1>

                            <br/>

                        <div className = "search__compare">

                            <p>Search, compare, and buy products all at one place.</p>
                            <p style = {{marginTop: "-15px"}}>Post your services, accelerate your business.</p>

                        </div>

                        <br/>

                        <div className = "search__field">

                            <Dropdown className = "mr-3">
                                <Dropdown.Toggle className = "search__field__tab" id="dropdown-basic" style = {{boxShadow: "4px 3px 2px #EFEFEF29", border: "1px solid #EEEEEE", borderRadius: "7px", opacity: "1", backgroundColor: "#fcfcfc", color: "rgba(43, 42, 53, 0.59)", fontFamily: "Hind", fontWeight: "300", paddingTop: "8px"}}>
                                    All 
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Form inline>
                                <FormControl 
                                    type="text" 
                                    placeholder="Search services or use cases such as UI Design"
                                    style = {  width >= 768 ? {width: "350px", boxShadow: "4px 3px 2px #EFEFEF29", border: "1px solid #EEEEEE", borderRadius: "7px", opacity: "1", backgroundColor: "#fcfcfc"} 
                                    : (width >= 509 && width < 768) ? {width: "350px", boxShadow: "4px 3px 2px #EFEFEF29", border: "1px solid #EEEEEE", borderRadius: "7px", opacity: "1", backgroundColor: "#fcfcfc",} 
                                    : (width >= 409 && width < 509) ? {width: "222px", boxShadow: "4px 3px 2px #EFEFEF29", border: "1px solid #EEEEEE", borderRadius: "7px", opacity: "1", backgroundColor: "#fcfcfc",} 
                                    : {width: "158px", boxShadow: "4px 3px 2px #EFEFEF29", border: "1px solid #EEEEEE", borderRadius: "7px", opacity: "1", backgroundColor: "#fcfcfc",}} />
                                  
                                <Button className = "ml-3" style = {{boxShadow: "4px 3px 2px #EFEFEF29", border: "1px solid #EEEEEE", borderRadius: "7px", opacity: "1", backgroundColor: "#fcfcfc"}}><AiOutlineSearch style = {{fill: "#334ac0"}}/></Button>

                            </Form>

                        </div>

                        <div className = { width >= 550 ? "mt-2 search__field" : "search__field__col mt-2" }>

                            <p className = "trending">Trending</p>

                            <Link className = {width >= 550 ? "search__field__links ml-3" : "search__field__links mt-2 ml-1"} to = "/trending">AI - Process automation services</Link>
                            <Link className = {width >= 550 ? "search__field__links ml-3" : "search__field__links mt-2 ml-1"} to = "/trending">Website Development</Link>
                            <Link className = {width >= 550 ? "search__field__links ml-3" : "search__field__links mt-2 ml-1"} to = "/trending">HR</Link>

                        </div>

                        <br/>

                        <Link to = "/sign-up">
                            <GenericButton text = "Sign up here" />
                        </Link>
                    
                        <br/>
                        <br/>
                        <br/>
                        <br/>

                        <Link className = "section__heading" to = "/categories">CATEGORIES</Link>

                        <br/>
                        <br/>

                        <p className = "category__section__details">Compare, connect and buy services all at one place</p>

                        <br/>

                        <Row className = "text-center">
                            <Card linkRoute = "/categories/finances-banking" src = {FinancesAndBanking} categoryName1 = "Finances &" categoryName2 = "Banking"/>
                            <Card linkRoute = "/categories/marketing-seo" src = {MarketingAndSEO} categoryName1 = "Marketing &" categoryName2 = "SEO"/>
                            <Card linkRoute = "/categories/content-creative" src = {ContentAndCreative} categoryName1 = "Content &" categoryName2 = "Creative"/>
                            <Card linkRoute = "/categories/design-dev" src = {DesignAndDev} categoryName1 = "Design &" categoryName2 = "Dev" />
                            <Card linkRoute = "/categories/hiring-firms" src = {HiringFirms} categoryName1 = "Hiring" categoryName2 = "Firms"/>
                        </Row>

                        <br/>
                        <br/>
                        <br/>
                        <br/>

                        <Link className = "section__heading" to = "/categories">TRENDING PRODUCTS</Link>

                        <br/>

                        <p className = "section__font">Search for products, compare and buy all at one place.</p>

                        <br/>

                        <Row className = "text-center"> 
                            <div className = "empty__card__row mr-2">
                                <EmptyCard />
                                <EmptyCard />
                                <EmptyCard />
                                <EmptyCard />
                                <EmptyCard />
                            </div>
                        </Row>

                        <br/>
                        <br/>
                        <br/>
                        <br/>

                        <Link className = "section__heading" to = "/categories">FAST & TRUSTWORTHY</Link>

                        <br/>
                        <br/>

                        <p className = "section__font">Boost productivity</p>

                        <br/>

                        <p className = "augbiz__details">Augbiz gives you all the tools to unleash the entrepreneur in you. Post your request orservice and connect with verified clients. Once you find the right client close the deal on Augbiz hassle free. Augbiz also helps you grow by exposing to you new use cases & technology.</p>

                        <br/>

                        <Col className = "boost__productivity__container"/>

                        <br/>
                        <br/>
                        <br/>
                        <br/>

                        <Link className = "section__heading" to = "/categories">PRODUCT SPOTLIGHT</Link>

                        <br/>
                        <br/>

                        <p className = "section__font">Compare, connect and buy all services at one place.</p>

                        <br/>
                        <br/>

                        <Col className = "boost__productivity__container">
                            <AiFillPlayCircle className = "play__icon"/>
                        </Col>

                        <br/>
                        <br/>
                        <br/>
                        <br/>

                        <Row>
                            <KnowMoreCard title = "Connect with potential clients" text = "Post your services and connect with clients, close your deal hassle free at one place." link = "Know more"/>
                            <KnowMoreCard title = "We're just getting started" text = "We are looking to bring in more vendors, use cases to innovate how business is done." link = "Know more"/>
                        </Row>

                        <br/>
                        <br/>
                        <br/>
                        <br/>

                        </Col>

                    </Row>

                </Container>

            <Footer/>
            
        </div>
    );
}

export default LandingPage;
