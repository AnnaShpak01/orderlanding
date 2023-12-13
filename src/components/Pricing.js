import React from 'react';

function Pricing() {

    return (
        <div className="pricing" id="contact">
            <div className="container">
                <div className="row">
                   <div className="col-md-9">
                       <p className="gradient-text">
                       Ready to boost your business?
                        Get your own professional landing page 
                       </p>
                   </div>
                   <div className="col-md-3">
                       <p className="price">
                       from <span>€299</span>
                       </p>
                   </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <p className="under-price-text">Get in touch or create an account.</p>
                        <div>
                            <a href="#" className="btn-gradient">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;