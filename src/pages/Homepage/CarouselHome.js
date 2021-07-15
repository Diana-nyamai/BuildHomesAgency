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
      <img style={{maxWidth: '100%',margin: 'auto'}} src={BH} alt="caro"/>
    </div>
    <div style={contentStyle}>
   <h3>2</h3>
    </div>
    <div style={contentStyle}>
    <h3>2</h3>
    </div>
  </Carousel>
    )
}

export default CarouselHome
