import React, { Component } from 'react'
import Gallery from '../Gallery/Gallery'
import CarouselHome from './CarouselHome'

export class HomePage extends Component {
    render() {
        return (
            <div>
            <CarouselHome/>
            <Gallery/>
            </div>
        )
    }
}

export default HomePage
