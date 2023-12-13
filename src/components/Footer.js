import React from 'react';

function Footer() {

    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                   <div className="col-md-3">
                   <a className="navbar-brand" href="/" title="logo">Nordicsoft</a>
                   </div>
                   <div className="col-md-9">
                   <p className="footer-text">
                   We always try to follow a Scandinavian model of success in our work by implementing innovative yet simple and practical ideas into our projects. We love what we do and cherish our customers.                   </p>
                   </div>
                </div>
                <div className="row">
                    <div className="col-md-12 response-center">
                        <div className="social-icons-block">
                            <div className="icon-social icon-linkedin"></div>
                            <div className="icon-social icon-facebook"></div>
                            <div className="icon-social icon-twitter-bird"></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <p className="rights-reserved">
                           <span> Created with love | ©</span> <span>{new Date().getFullYear()}</span><span>. NordicSoft OÜ (Reg. #14187539). NordicSoft is EU registered trademark of NordicSoft OÜ. All Rights Reserved.</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
}


export default Footer;


