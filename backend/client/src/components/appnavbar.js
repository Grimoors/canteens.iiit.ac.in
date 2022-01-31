import React, { Component } from "react";
import{
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    NavbarText
} from 'reactstrap' ;

class AppNavbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen:false,
        };

        // this.toggle = this.toggle.bind(this);
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {

        return(

            <div>
            <Navbar color ="dark" dark expand="sm" className="mb-5" >
            <Container className="ml-auto">
                
                <NavbarToggler onClick= {this.toggle} className="ml-auto" navbar />
                
                <NavbarBrand href="/" className="ml-auto" >
                canteens.iiit.ac.in
                </NavbarBrand>
                {/* <NavbarToggler onClick= {this.toggle} className="ml-auto" navbar /> */}
                <Collapse isOpen={this.state.isOpen} navbar className="ml-auto">
                    <Nav className="ml-auto" navbar>
                        <NavItem className="ml-auto">
                            <NavLink href="https://github.com/Grimoors/canteens.iiit.ac.in">
                                Dashboard
                            </NavLink>
                        </NavItem>
                        <NavItem className="ml-auto">
                            <NavLink href="https://github.com/Grimoors/canteens.iiit.ac.in">
                                Vendor Login
                            </NavLink>
                        </NavItem>
                        <NavItem className="ml-auto">
                            <NavLink href="https://github.com/Grimoors/canteens.iiit.ac.in">
                                Buyer Login
                            </NavLink>
                        </NavItem>
                        <NavItem className="ml-auto">
                            <NavLink href="https://github.com/Grimoors/canteens.iiit.ac.in">
                                GitHub Repository
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
            </Navbar>
        </div>
    

        );
        }
        

}



export default AppNavbar ;