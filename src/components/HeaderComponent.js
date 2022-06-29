import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Button, Collapse, Form, FormGroup, Input, Jumbotron, Label, Modal, ModalBody, ModalHeader, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from "reactstrap";
// import "../Modal.css"

class Header extends Component {
    constructor(props) {
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(event){
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value + "Remembered: " + this.remember.checked);
        event.preventDefault();
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    toggleNav() {
        this.setState({ isNavOpen: !this.state.isNavOpen });
    }
    render() {
        return (
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                            <ModalHeader toggle={this.state.toggleModal}>Login</ModalHeader>
                            <ModalBody>
                                <Form onSubmit={this.handleLogin}>
                                    <FormGroup>
                                        <Label htmlFor="username">Username</Label>
                                        <Input type="text" id="username" name="username" innerRef={(input) => this.username = input} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="password">Password</Label>
                                        <Input type="password" id="password" name="password" innerRef={(input) => this.password = input} />
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" name="remember" innerRef={(input) => this.remember = input}/>Remember me
                                        </Label>
                                    </FormGroup>
                                    <Button type="submit" value="submit" color="primary">Login</Button>
                                </Form>
                            </ModalBody>
                        </Modal>
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"><img src="assets/images/logo.png" height="30" /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home"><span className="fa fa-home fa-lg">Home</span></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus"><span className="fa fa-info fa-lg">About us</span></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/menu"><span className="fa fa-list fa-lg">Menu</span></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus"><span className="fa fa-address-card fa-lg">Contact us</span></NavLink>
                                </NavItem>
                                <NavItem>
                                    <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg">Login</span></Button>
                                </NavItem>
                            </Nav>
                        </Collapse>

                    </div>
                </Navbar >
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante Con Fusion</h1>
                                <p>
                                    We take inspiration from the World's best cuisines, and create a
                                    unique fusion experience
                                </p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </div >
        );
    }
}

export default Header;
