import React, { Component } from 'react';

export default class Navbar extends Component {
    constructor(props) {
        super(props)

        this.toggleClass = this.toggleClass.bind(this);
        this.state = {
            activeIndex: 0,
            prevScrollpos: window.pageYOffset,
            visible: true
        }
    }

    toggleClass(index, e) {
        this.setState({ activeIndex: index });
    };

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        const { prevScrollpos } = this.state;
        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollpos > currentScrollPos;

        this.setState({
            prevScrollpos: currentScrollPos,
            visible
        });
    };

    render() {

        return (
            <ul className="nav navbar-nav navbar-right" id="menu">
                {this.renderSidebarMenuItems}
                <li className={this.state.activeIndex === 0 ? 'active' : null} onClick={this.toggleClass.bind(this, 0)}><a href='#' title='Home'>Home</a></li>
                <li className={this.state.activeIndex === 1 ? 'active' : null} onClick={this.toggleClass.bind(this, 1)}><a href='#about'  title='About'>About</a></li>
                <li className={this.state.activeIndex === 2 ? 'active' : null} onClick={this.toggleClass.bind(this, 2)} id="desktop"><a href='#pricing'  title='Pricing'>Pricing</a></li>
                <li className={this.state.activeIndex === 3 ? 'active' : null} onClick={this.toggleClass.bind(this, 3)}><a href='#contact'  title='Contact'>Contact</a></li>
            </ul>
        )
    }

}