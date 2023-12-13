import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class DemoCarousel extends Component {
    render() {
        return (
            <Carousel infiniteLoop>
                <div className="testimonial">
                    <img src="/img/avatar1.png" alt="avatar1"/>
                    <h6>Sam T.</h6>
                    <p>Professional service, great team! I got what I expected and I am completely satisfied with the services provided! Even though it often took me some time to provide needed information, the guys always reacted loyally and made a very high quality landing page for me.</p>
                </div>
                <div className="testimonial">
                    <img src="/img/avatar2.png" alt="avatar2"/>
                    <h6>Sam T.</h6>
                    <p>Professional service, great team! I got what I expected and I am completely satisfied with the services provided! Even though it often took me some time to provide needed information, the guys always reacted loyally and made a very high quality landing page for me.</p>
                </div>
                <div className="testimonial">
                    <img src="/img/avatar3.png" alt="avatar3"/>
                    <h6>Sam T.</h6>
                    <p>Professional service, great team! I got what I expected and I am completely satisfied with the services provided! Even though it often took me some time to provide needed information, the guys always reacted loyally and made a very high quality landing page for me.</p>
                </div>
            </Carousel>
        );
    }
};