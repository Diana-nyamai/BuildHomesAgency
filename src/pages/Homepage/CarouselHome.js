import React from 'react'
import { Carousel } from 'antd';
import BH from '../../assets/images/bhMain.png'

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
      <img style={image} src={BH} alt="caro"/>
    </div>
    <div style={contentStyle}>
    <img style={image} src={BH} alt="caro"/>
    </div>
    <div style={contentStyle}>
    <img style={image} src={BH} alt="caro"/>
    </div>
    <div style={contentStyle}>
      <img style={image} src={BH} alt="caro"/>
    </div>
  </Carousel>
    )
}

export default CarouselHome
