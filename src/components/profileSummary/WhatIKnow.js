import React from 'react'
import html_logo from '../../assests/html.jpg';
import css_logo from '../../assests/css.jpg';
import js_logo from '../../assests/js.jpg';
import csharp_logo from '../../assests/csharp.jpg';
import react_logo from '../../assests/react.jpg';
import node_logo from '../../assests/node.jpg';
import express_logo from '../../assests/express.jpg';
import flutter_logo from '../../assests/flutter.jpg';
import dotNet_logo from '../../assests/dotNet.jpg';
import dart_logo from '../../assests/dart.jpg';



export default function WhatIKnow() {
  return (
    <div className='whatIKnow'>
        <h3>What I Know...</h3>
        <div>
            <img src={html_logo} alt="html_logo" />
            <img src={css_logo} alt="css_logo" />
            <img src={js_logo} alt="js_logo" />
            <img src={csharp_logo} alt="csharp_logo" />
            <img src={react_logo} alt="react_logo" />
            <img src={node_logo} alt="node_logo" />
            <img src={express_logo} alt="express_logo" />
            <img src={flutter_logo} alt="flutter_logo" />
            <img src={dotNet_logo} alt="dotNet_logo" />
            <img src={dart_logo} alt="dart_logo" />
        </div>
    </div>
  )
}
