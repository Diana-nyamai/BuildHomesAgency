import React from 'react'
import { Carousel } from 'antd';
import BH from '../../assets/images/bhMain.png'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() =>({
     contentStyle: {
          height: '500px',
          color: '#000',
          lineHeight: '400px',
          textAlign: 'center',
          background: '#fff',
  }
}))
 
  

function CarouselHome() {
    return (
        <Carousel autoplay>
    <div>
      <img style={contentStyle} src={BH} alt="caro"/>
    </div>
    <div>
    <img style={contentStyle} src={BH} alt="caro"/>
    </div>
    <div>
    <img style={contentStyle} src={BH} alt="caro"/>
    </div>
    <div>
    <img style={contentStyle} src={BH} alt="caro"/>
    </div>
  </Carousel>
    )
}

export default CarouselHome
