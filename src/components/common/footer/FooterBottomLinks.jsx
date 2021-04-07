import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css'

function FooterBottomLinks(props) {
    return (
        <div className = "footer__bottom">
            <p className = "footer__font font__blue">{props.title}</p>
            <Link className = "footer__font__1 font__black mt-1" to = {props.linkRoute1}>{props.text1}</Link>
            <Link className = "footer__font__1 font__black mt-1" to = {props.linkRoute2}>{props.text2}</Link>
        </div>
    );
}

export default FooterBottomLinks;
