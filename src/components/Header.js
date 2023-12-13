import React, { Component } from 'react';
import Navbar from './Navbar.js'
import {
    Menu,
    MenuList,
    MenuButton,
    MenuLink
  } from "@reach/menu-button";
  import "@reach/menu-button/styles.css";

   
    
    class MainPartHeader extends Component {
        constructor(props) {
            super(props)
    
            this.state = {
                visible: true
            }
        }
    
        componentDidMount() {
            window.addEventListener("scroll", this.handleScroll);
        }
    
        componentWillUnmount() {
            window.removeEventListener("scroll", this.handleScroll);
        }
    
        handleScroll = () => {
            const menuPoint = 50;
            const currentScrollPos = window.pageYOffset;
            const visible = menuPoint > currentScrollPos;
    
            this.setState({
                prevScrollpos: currentScrollPos,
                visible
            });
        };
    
        render() {
            const iconMenu = [];
    
            for (var j = 0; j < 3; j++) {
                iconMenu.push(<span key={j} className="icon-bar"></span>);
            }
            return (
    
                <nav className="navbar navbar-custom" role="navigation">
    
                    <div className="container">
                        <div className="col-md-12">
                            <div className="navbar-header">
                                <a className="navbar-brand" href="/" title="logo">Nordicsoft</a>
                                <div className="collapse navbar-collapse" id="custom-collapse">
                                    <Navbar />
                                </div>
                                <div className="navbar-toggle" data-toggle="collapse" data-target="#custom-collapse">
                                    
                                        <Menu className="responsive-menu">
                                          <MenuButton className="btn-nav-toggled"><span className="sr-only">Toggle navigation</span>
                                                {iconMenu}
                                        </MenuButton>
                                          <MenuList className="nav navbar-nav">
                                          <a href="#"> <MenuLink className="item-nav">Home</MenuLink></a>
                                          <a href="#about"> <MenuLink  className="item-nav">About</MenuLink></a>
                                          <a href="#pricing"> <MenuLink to="view" className="item-nav">Pricing</MenuLink></a>
                                          <a href="#contact"> <MenuLink to="view" className="item-nav">Contact</MenuLink></a>
                                          </MenuList>
                                        </Menu>
                                </div>
                          
                                <div>
                                    <a href="" className="btn-white btn-get-touch">Get in touch</a> 
                                </div>     
                             </div>
                        </div>
                    </div>
                </nav >
            )
        }
    }
    
    function Header() {
    
        return (
            <MainPartHeader />
        );
    }

export default Header;
