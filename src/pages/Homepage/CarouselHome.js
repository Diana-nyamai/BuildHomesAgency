import React from 'react'
import { Carousel } from 'antd';
import BH from '../../assets/images/BH.png'

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  

function CarouselHome() {
    return (
        <Carousel autoplay>
    <div>
      <h3 style={contentStyle}><img src={BH} alt="caro"/></h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
    )
}

export default CarouselHome
