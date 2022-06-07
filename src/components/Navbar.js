import React, { useState } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
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
        <Navbar bg="dark" variant="dark" className='py-3 ps-5 border-danger border-bottom'>
            <Navbar.Brand onClick={() => setSearch('')}>
                <Nav.Link as={Link} className="navbar-text" to="/">
                    <img
                        alt=""
                        src="https://react-bootstrap.github.io/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                </Nav.Link>

            </Navbar.Brand>
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
        </Navbar>
    );
}

export default NavbarComponent;