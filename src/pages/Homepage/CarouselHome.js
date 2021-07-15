import React from 'react'
import { Carousel } from 'antd';
import BH from '../../assets/images/bhMain.png'

const contentStyle = {
    height: '500px',
    color: '#fff',
    lineHeight: '400px',
    textAlign: 'center',
    background: '#364d79',
  };
  

function CarouselHome() {
    return (
        <Carousel autoplay>
    <div>
      <h3 style={contentStyle}><img style={contentStyle} src={BH} alt="caro"/></h3>
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
