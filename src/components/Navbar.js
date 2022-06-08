import React, { useState } from "react";
import { Navbar, Nav, Form, FormControl, Button, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

function NavbarComponent() {
    const [search, setSearch] = useState('');
    const [disableButton, setDisableButton] = useState(true);

    const navigate = useNavigate();

    const handleOnSubmit = (e) => {
        e.preventDefault();

        navigate(`/search?title=${search}`);
    }

    return (
        <Navbar bg="dark" variant="dark" expand='lg' className='border-danger border-bottom'>
            <Container fluid>
                <Navbar.Brand onClick={() => setSearch('')}>
                    <Nav.Link as={Link} className="navbar-text d-flex align-items-center gap-2" to="/">
                        <img
                            alt=""
                            src="logo-mymovies2.png"
                            width="50"
                            height="50"
                            className="d-inline-block align-top"
                        />
                        <h4>FM</h4>
                    </Nav.Link>

                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} className="navbar-text" to="/" onClick={() => setSearch('')}>Home</Nav.Link>
                        <Nav.Link as={Link} className="navbar-text" to="/favorites" onClick={() => setSearch('')}>Favorites</Nav.Link>
                    </Nav>
                    <Form className="d-flex mx-5" onSubmit={handleOnSubmit}>
                        <FormControl
                            type="search"
                            placeholder="Search Movie..."
                            className="me-2 rounded-pill border-dark text-white-50 navbar-search"
                            aria-label="Search"
                            value={search}
                            onChange={(e) => {
                                setSearch(e.target.value);
                                if (e.target.value.length > 0) {
                                    setDisableButton(false);
                                } else {
                                    setDisableButton(true);
                                }
                            }}
                        />
                        <Button variant="outline-primary" type='submit' disabled={disableButton} >Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;