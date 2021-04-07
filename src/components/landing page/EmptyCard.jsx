import React from 'react';
import { Card } from 'react-bootstrap';

import './EmptyCard.css';

function EmptyCard() {

    return (
    
        <Card className = "empty__card margin__left" style = {{borderRadius: "7px 7px 7px 7px",  backgroundColor: "#ececec", height: "156px", minWidth: "156px"}}>
            <Card.Body />
        </Card>     

    );
}

export default EmptyCard;
