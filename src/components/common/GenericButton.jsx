import React from 'react';
import { Button } from 'react-bootstrap';

function GenericButton(props) {
    return (

        <Button style = {{backgroundColor: "#334ac0", color: "#fff", borderRadius: "5px", border: "1px solid #334ac0", fontSize: "16px", fontFamily: "Hind", fontWeight: "500", letterSpacing: "0.023em", paddingTop: "8px"}}>{props.text}</Button>
       
    );
}

export default GenericButton;
