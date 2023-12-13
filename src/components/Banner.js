import React from 'react';
import Header from "./Header";

function Banner() {

    return (
        <div className="banner">
            <Header />
            <div className="banner-block">
                <div className="container">
                    <div className="row">
                        <div className="hidden-md">
                            <h1 className="col-xs-12">Take your landing page to the <span className="font-weight">next level</span></h1>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            <div className="text-block"> 
                                <h1 className="hidden-xs">Take your landing page to the <span className="font-weight">next level</span></h1>
                                <p className="hs-title-size-1 font-inc under-h1">
                                    Improve conversion and sales of your product, business and services online with the professional and responsive landing page
                                </p>
                            </div>
                            <a href="#" className="btn-gradient">Contact Us</a>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            <div>
                                <div className="img-imitation"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="brands-section">
                <div className="container">
                    <div className="col-md-12">
                        <div className="brands-block">
                            <div className="brand ">
                                <div className="icon1 icon-brand"></div>
                            </div>
                            <div className="brand">
                                <div className="icon2 icon-brand"></div>
                            </div>
                            <div className="brand">
                                <div className="icon3 icon-brand"></div>
                            </div>
                            <div className="brand">
                                <div className="icon4 icon-brand"></div>
                            </div>
                            <div className="brand">
                                <div className="icon5 icon-brand"></div>
                            </div>
                            <div className="brand">
                                <div className="icon6 icon-brand"></div>
                            </div>
                            <div className="brand">
                                <div className="icon7 icon-brand"></div>
                            </div>
                        </div>
                        <div className="brands-block">
                            <div className="brand">
                                <div className="icon8 icon-brand"></div>
                            </div>
                            <div className="brand">
                                <div className="icon9 icon-brand"></div>
                            </div>
                            <div className="brand">
                                <div className="icon10 icon-brand"></div>
                            </div>
                            <div className="brand">
                                <div className="icon11 icon-brand"></div>
                            </div>
                            <div className="brand">
                                <div className="icon12 icon-brand"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
