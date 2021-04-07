import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col } from 'react-bootstrap';

import './CardComponent.css';

function CardComponent(props) {
    return (

        <Card as = {Col} lg style = {{border: "none"}}>
            <Card.Img variant="top" src= {props.src} style = {{height: "156px", width: "156px", borderRadius: "7px 7px 7px 7px"}}/>
            <Card.Body>
                <Card.Text>
                    <Link to = {props.linkRoute} className = "card__text">
                    {props.categoryName1}
                    <br/>
                    {props.categoryName2}
                    </Link>
                </Card.Text>
            </Card.Body>
        </Card>
        
    );
}

export default CardComponent;
