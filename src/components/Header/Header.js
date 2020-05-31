import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBLink } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../../App'

class Header extends Component {
    state = {
        isOpen: false
    };
      
    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }
    
    render() {

        return (
            <Router>
            <MDBNavbar color=" red accent-2" dark expand="md">
                <MDBNavbarBrand>
                <strong className="white-text">Lup3</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.toggleCollapse} />
                <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                    <MDBNavbarNav left>
                        <MDBNavItem>
                            <MDBLink to="/">Home</MDBLink >
                        </MDBNavItem>

                        <MDBNavItem>
                            <MDBLink to="/about">About</MDBLink >
                        </MDBNavItem>

                        <MDBNavItem>
                            <MDBLink to="/contact">Contact</MDBLink >
                        </MDBNavItem>

                        <MDBNavItem>
                            <MDBLink to="/portifolio">Portifolio</MDBLink >
                        </MDBNavItem>

                        <MDBNavItem>
                            <MDBDropdown>
                                <MDBDropdownToggle nav caret>
                                    <div className="d-none d-md-inline">Hero Game</div>
                                </MDBDropdownToggle>

                                <MDBDropdownMenu className="dropdown-default">
                                    <MDBDropdownItem color=" red accent-2">
                                        <MDBLink to="/gethero" style={{color: "black"}} disabled>Get Hero</MDBLink >
                                    </MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavItem>
                    </MDBNavbarNav>

                    <MDBNavbarNav right>
                        <MDBNavItem>
                            <MDBNavLink className="waves-effect waves-light" to="#!">
                                <MDBIcon fab icon="twitter" />
                            </MDBNavLink>
                        </MDBNavItem>

                        <MDBNavItem>
                            <MDBNavLink className="waves-effect waves-light" to="#!">
                                <MDBIcon fab icon="google-plus-g" />
                            </MDBNavLink>
                        </MDBNavItem>

                        <MDBNavItem>
                            <MDBNavLink className="waves-effect waves-light" to="#!">
                                <MDBIcon fab icon="instagram" />
                            </MDBNavLink>
                        </MDBNavItem>

                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>

            <App />
            
            </Router>
            );
    }
}
 
export default Header;