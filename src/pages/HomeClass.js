import React, { Component } from "react";
import { Card, FormControl } from 'react-bootstrap';
import "../styles/Home.css";

export default class Home extends Component {
    state = {
        searchInput: '',
        filteredPosts: []
    }

    handleSearchPosts(input) {
        const filter = this.props.posts.filter((el) => {
            if (el.title.toLowerCase().indexOf(input.toLowerCase()) > -1 || el.original_title.toLowerCase().indexOf(input.toLowerCase()) > -1 || el.overview.toLowerCase().indexOf(input.toLowerCase()) > -1) {
                return true;
            } else {
                return false;
            }
        })

        this.setState({
            filteredPosts: filter
        })
    }

    returnDataPosts() {
        if (this.state.searchInput.length > 0) {
            return this.state.filteredPosts;
        } else {
            return this.props.posts;
        }
    }

    render() {
        return (
            <div className="d-flex justify-content-around flex-wrap">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="m-3"
                    aria-label="Search"
                    onChange={(e) => {
                        this.setState({
                            searchInput: e.target.value
                        });
                        this.handleSearchPosts(e.target.value);
                    }}
                />
                {this.returnDataPosts().map((el, i) => (
                    <Card className="m-2" style={{ width: '15rem' }} key={i}>
                        <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500" + el.poster_path} />
                        {/* <Card.Body>
                            <Card.Title className="text-dark text-center">{el.title}</Card.Title>
                            <Button className="w-100" variant="success">Detail</Button>
                        </Card.Body> */}
                    </Card>
                ))}
                {this.returnDataPosts().length === 0 && <h1 className="d-flex align-items-center">Search not found...</h1>}
            </div>
        );
    }
}