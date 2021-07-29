import React, { Component } from 'react'
import AboutPage from '../Aboutpage/AboutPage'
import Gallery from '../Gallery/Gallery'
import CarouselHome from './CarouselHome'

export class HomePage extends Component {
    render() {
        return (
            <div>
            <CarouselHome/>
            <Gallery/>
            <AboutPage/>
            </div>
        )
    }
}

export default HomePage
