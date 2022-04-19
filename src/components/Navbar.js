import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import "../styles/Navbar.css";

export default class NavbarComponent extends Component {
    state = {
        currentPage: 'Home',
    }

    render() {
        return (
            <Navbar bg="dark" variant="dark" className='py-3 ps-5 border-danger border-bottom'>
                <Navbar.Brand href="#home">
                <img
                    alt=""
                    src="https://react-bootstrap.github.io/logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link active={this.state.currentPage === 'Home'} onClick={() => {
                        this.setState({
                            currentPage: 'Home'
                        });

                        this.props.currentPage('Home');
                    }}>Home</Nav.Link>
                    <Nav.Link active={this.state.currentPage === 'Favorites'} onClick={() => {
                        this.setState({
                            currentPage: 'Favorites'
                        })

                        this.props.currentPage('Favorites');
                    }}>Favorites</Nav.Link>
                </Nav>
                <Form className="d-flex mx-5">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                />
                <Button variant="outline-primary">Search</Button>
                </Form>
            </Navbar>
        );
    }
}