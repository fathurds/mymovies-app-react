import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function NavbarComponent() {
    const [currentPage, setCurrentPage] = useState("Home");

    return (
        <Navbar bg="dark" variant="dark" className='py-3 ps-5 border-danger border-bottom'>
            <Navbar.Brand href="#home">
                <Nav.Link active={currentPage === 'Home'} onClick={() => {
                    setCurrentPage("Home");
                }}>
                    <Link className="navbar-text" to="/">
                        <img
                            alt=""
                            src="https://react-bootstrap.github.io/logo.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                    </Link>
                </Nav.Link>

            </Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link active={currentPage === 'Home'} onClick={() => {
                    setCurrentPage("Home");
                }}><Link className="navbar-text" to="/">Home</Link></Nav.Link>
                <Nav.Link active={currentPage === 'Favorites'} onClick={() => {
                    setCurrentPage("Favorites");
                }}><Link className="navbar-text" to="/favorites">Favorites</Link></Nav.Link>
            </Nav>
            {/* <Form className="d-flex mx-5">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                />
                <Button variant="outline-primary">Search</Button>
            </Form> */}
        </Navbar>
    );
}

export default NavbarComponent;