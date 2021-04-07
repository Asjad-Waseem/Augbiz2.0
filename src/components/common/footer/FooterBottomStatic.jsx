import React from 'react';

import './Footer.css';

function FooterBottomStatic(props) {
    return (
        <div className = "footer__bottom">
            <p className = "footer__font font__blue">{props.title}</p>
            <p className = "footer__font__1 font__black mt-1">{props.text1}</p>
            <p className = "footer__font__1 font__black margin__12">{props.text2}</p>
        </div>
    );
}

export default FooterBottomStatic;
