import React, { useState } from "react";
import { Card, FormControl, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

function Home(props) {
    const [searchInput, setSearchInput] = useState("");
    const [filteredPosts, setFilteredPosts] = useState([]);

    const navigate = useNavigate();

    const handleSearchPosts = (input) => {
        const filter = props.posts.filter((el) => {
            if (el.title.toLowerCase().indexOf(input.toLowerCase()) > -1 || el.original_title.toLowerCase().indexOf(input.toLowerCase()) > -1 || el.overview.toLowerCase().indexOf(input.toLowerCase()) > -1) {
                return true;
            } else {
                return false;
            }
        })

        setFilteredPosts(filter);
    }

    const returnDataPosts = () => {
        if (searchInput.length > 0) {
            return filteredPosts;
        } else {
            return props.posts;
        }
    }

    return (
        <div className="d-flex justify-content-around flex-wrap">
            <FormControl
                type="search"
                placeholder="Search"
                className="m-3"
                aria-label="Search"
                onChange={(e) => {
                    setSearchInput(e.target.value);
                    handleSearchPosts(e.target.value);
                }}
            />
            {returnDataPosts().map((el, i) => (
                <Card className="m-2" style={{ width: '15rem' }} key={i}>
                    <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500" + el.poster_path} onClick={() => {
                        navigate('/detail/' + el.id);
                    }} />
                    {/* <Card.Body>
                        <Card.Title className="text-dark text-center">{el.title}</Card.Title>
                        <Button className="w-100" variant="success" >Detail</Button>
                    </Card.Body> */}
                </Card>
            ))}
            {returnDataPosts().length === 0 && <h1 className="d-flex align-items-center">Search not found...</h1>}
        </div>
    );
}

export default Home;