import React from 'react'
import { Carousel } from 'antd';
import prop1 from '../../src/assets/images/property/prop1.png';

const contentStyle = {
    height: '500px',
    color: '#000',
    lineHeight: '400px',
    textAlign: 'center',
    background: 'red',
  };


function CarouselHome() {
    return (
        <Carousel autoplay>
    <div style={contentStyle}>
      <img style={{maxWidth: '100%',margin: 'auto'}} src={prop1} alt="caro"/>
    </div>
    <div style={contentStyle}>
    <img style={{maxWidth: '100%',margin: 'auto'}} src={prop1} alt="caro"/>
    </div>
    <div style={contentStyle}>
    <img style={{maxWidth: '100%',margin: 'auto'}} src={prop1} alt="caro"/>
    </div>
  </Carousel>
    )
}

export default CarouselHome
