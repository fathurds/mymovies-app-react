import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { setFilteredPosts } from "../store/posts";

function NavbarComponent() {
    const [currentPage, setCurrentPage] = useState("Home");

    const listMovies = useSelector(state => state.posts.posts);
    const dispact = useDispatch();

    const handleSearchPosts = (input) => {
        if (input.length === 0) {
            dispact(setFilteredPosts([]));
        } else {
            const filter = listMovies.filter((el) => {
                if (el.title.toLowerCase().indexOf(input.toLowerCase()) > -1 || el.original_title.toLowerCase().indexOf(input.toLowerCase()) > -1 || el.overview.toLowerCase().indexOf(input.toLowerCase()) > -1) {
                    return true;
                } else {
                    return false;
                }
            })
    
            dispact(setFilteredPosts(filter));
        }
    }

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
            <Form className="d-flex mx-5">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    onChange={(e) => {
                        handleSearchPosts(e.target.value);
                    }}
                />
                <Button variant="outline-primary">Search</Button>
            </Form>
        </Navbar>
    );
}

export default NavbarComponent;