import React from 'react';

function Portfolio() {

    return (
        <div className="portfolio" id="pricing">
            <div className="part1">
            <div className="container">
                <div className="row">
                <div className="col-md-5 text-f-r">
                    <div className="text-section">
                        <h2>Fully ready landing page in just 7 days</h2>
                        <p>Our specialists will create a landing page that is not just a beautiful picture, but an effective marketing tool, since every project we make involves a whole team of marketers, designers, programmers, who are able to develop the most interesting and conversion solution for any business needs.</p>
                        <p>Our many years of experience allows us to guarantee a significant increase in the sales of your goods or services.</p>
                    </div>
                    </div>
                    <div className="col-md-3 col-xs-5">
                    <div className="white-block p-w-1 img-bg"></div>
                    </div>
                    <div className="col-md-4 col-xs-7">
                    <div className="white-block p-w-2 img-bg"></div>
                    <div className="white-block p-w-3 img-bg"></div>
                    </div>
                </div>
            </div>
            </div>
            <div className="part2">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="text-section second-text-block">
                            <h2>What is included in price?</h2>
                            <ul className="custom-ul">
                                <li>Technical requirment development</li>
                                <li>Prototype design</li>
                                <li>Structure development</li>
                                <li>Adaptive layout</li>
                                <li>Google Analytics set-up </li>    
                                <li>Custom design</li>
                                <li>30 days technical support</li>
                            </ul>                          
                        </div>
                    </div>
                    <div className="col-md-5 col-xs-6">
                    <div className="white-block p-w-4 img-bg"></div>
                    </div>
                    <div className="col-md-3 col-xs-6">
                    <div className="white-block p-w-5 img-bg"></div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;