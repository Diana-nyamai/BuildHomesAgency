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
  

function CarouselHome() {
    return (
        <Carousel autoplay>
    <div style={contentStyle}>
      <img  src={BH} alt="caro"/>
    </div>
    <div style={contentStyle}>
    <img  src={BH} alt="caro"/>
    </div>
    <div style={contentStyle}>
    <img  src={BH} alt="caro"/>
    </div>
    <div style={contentStyle}>
      <img  src={BH} alt="caro"/>
    </div>
  </Carousel>
    )
}

export default CarouselHome
