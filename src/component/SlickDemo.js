import React, { Component } from 'react'  
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
import Slider from "react-slick";  
import './assets/slickdemo.css';  
import myImg1 from './assets/slide1.jpg';
import myImg2 from './assets/slide2.jpg';
export class SlickDemo extends Component {  
    render() {  
    
          return (  
      
            <Slider dots={false}  
            slidesToScroll={1}  
            autoplay={true}  
            autoplaySpeed={2000}>  
              <div className="wdt">  
              <img  className="img" src= {myImg1} className="img"/>  
              <div className="slider-text">
              <h2 class="text-uppercase intro_featured_word">
														IT agency
													</h2>
                          <h3 class="intro_before_featured_word">
														<span class="color-main2">Web Design</span>,
														<span class="color-main3">Marketing</span> &amp;
														<span class="color-main4">Branding</span>
													</h3>
                          </div>
              </div>  
              <div className="wdt">  
              <img   src= {myImg2} className="img"/>  
              <div className="slider-text">
              <h2 class="text-uppercase intro_featured_word">
														Marketing
													</h2>
                          <h3 class="intro_before_featured_word">
														<span class="color-main2">Web Design</span>,
														<span class="color-main3">Marketing</span> &amp;
														<span class="color-main4">Branding</span>
													</h3>
                          </div>
              </div>  
            </Slider>  
        
          );  
        }  
      }  
  
export default SlickDemo  