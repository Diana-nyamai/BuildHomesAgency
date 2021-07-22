import React from 'react'
import { Carousel } from 'antd';
import prop1 from '../../assets/images/property/prop1.png'
import prop2 from '../../assets/images/property/prop2.png'
import prop3 from '../../assets/images/property/prop3.png'

const contentStyle = {
    height: '500px',
    color: '#000',
    lineHeight: '400px',
    textAlign: 'center',
    background: 'red',
  };

const image = {
  background: 'red',
  maxWidth: '100%'
}

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
