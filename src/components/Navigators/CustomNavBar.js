import React from 'react';
import { MDBNavbar, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBMask, MDBView } from 'mdbreact';
import { BrowserRouter as Router} from 'react-router-dom';
import {Carousel} from 'react-bootstrap';
import {Nav,Navbar} from 'react-bootstrap';
import {Animated} from "react-animated-css";
import UpcomingEvents from './UpcomingEvents';
import Volunteers from './Volunteers';
import BecomeVolunteer from './BecomeVolunteer';
import LatestNews from './LatestNews';



class CustomNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
      <div>
      
        <header>
          <Router>
         
            <MDBNavbar color="pink" fixed="top" dark expand="md" scrolling transparent>
              <Navbar.Brand href="/">
               <img src="../Images/logo.png" alt="logo"/>
              </Navbar.Brand>
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav right>
                  <MDBNavItem active>
                    <Nav.Link href="/">Home</Nav.Link>
                  </MDBNavItem>
                  <MDBNavItem>
                  <Nav.Link href="/AboutPage">About Page</Nav.Link>
                    </MDBNavItem> 
                   <MDBNavItem>
                   <Nav.Link href="/StoriesUntold">Stories Untold</Nav.Link>
                </MDBNavItem>
                  <MDBNavItem>
                    <Nav.Link href="/EventPage">Events</Nav.Link>
                  </MDBNavItem>
                  <MDBNavItem>
                    <Nav.Link href="/ContactPage">Contact Us</Nav.Link>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
        </Router>

          <Carousel>
          

          <Carousel.Item interval={3000}>
          <MDBView src="../Images/landing1.jpeg">
            <MDBMask overlay="purple-light" className="flex-center flex-column text-white text-center">
            <Animated animationIn="fadeInDownBig">
              <h2 className="head1" style={{fontSize:'70px'}}>HEALTHY MEALS </h2>
              <h2 className="head2" style={{fontSize:'70'}}>FOR LOW INCOME EARNERS</h2></Animated>
              <Animated animationIn="bounceInLeft">
              <h5 style={{overflowY:'hidden'}}>Today in Kenya,
              </h5></Animated>
              <Animated  animationIn="bounceInRight"><p>Food security depends on whether households have stable incomes to afford food</p><br /></Animated>
              <p className="button"><a href="https://docs.google.com/forms/d/e/1FAIpQLScElLmk-MuBzgNdWiY2LCdJ8W_kGeaseegRp4xT_GGGFRtylQ/viewform?usp=pp_url">JOIN US TODAY</a></p>
            </MDBMask>
          </MDBView></Carousel.Item>
          
          <Carousel.Item interval={3000}>
          <MDBView src="../Images/landing2.jpeg">
            <MDBMask overlay="purple-light" className="flex-center flex-column text-white text-center">
            <Animated animationIn="fadeInDownBig">
              <h2 className="head1" style={{fontSize:'70px'}}>HEALTHY MEALS </h2>
              <h2 className="head2" style={{fontSize:'70'}}>FOR LOW INCOME EARNERS</h2></Animated>
              <Animated animationIn="bounceInLeft">
              <h5 style={{overflowY:'hidden'}}>Today in Kenya,
              </h5></Animated>
              <Animated  animationIn="bounceInRight"><p>Food security depends on whether households have stable incomes to afford food</p><br /></Animated>
              <p className="button"><a href="https://docs.google.com/forms/d/e/1FAIpQLScElLmk-MuBzgNdWiY2LCdJ8W_kGeaseegRp4xT_GGGFRtylQ/viewform?usp=pp_url">JOIN US TODAY</a></p>
            </MDBMask>
          </MDBView></Carousel.Item>

          <Carousel.Item interval={3000}>
          <MDBView src="../Images/landing3.jpeg">
            <MDBMask overlay="purple-light" className="flex-center flex-column text-white text-center">
            <Animated animationIn="fadeInDownBig">
              <h2 className="head1" style={{fontSize:'70px'}} >HEALTHY MEALS </h2>
              <h2 className="head2" style={{fontSize:'70'}}>FOR LOW INCOME EARNERS</h2></Animated>
              <Animated animationIn="bounceInLeft">
              <h5 style={{overflowY:'hidden'}}>Today in Kenya,
              </h5></Animated>
              <Animated  animationIn="bounceInRight"><p>Food security depends on whether households have stable incomes to afford food</p><br /></Animated>
              <p className="button"><a href="https://docs.google.com/forms/d/e/1FAIpQLScElLmk-MuBzgNdWiY2LCdJ8W_kGeaseegRp4xT_GGGFRtylQ/viewform?usp=pp_url">JOIN US TODAY</a></p>
            </MDBMask>
          </MDBView></Carousel.Item>

         
          
          </Carousel>

          
        </header>


        {/*main content*/}
        <main>
        
        </main>
      </div>
    );
  }
}

export default CustomNavBar;