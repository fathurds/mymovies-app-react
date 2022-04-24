import React, { Component } from "react";
import { Container, Row, Col, Image, Card, Button } from 'react-bootstrap';
import "../styles/Home.css";

export default class Home extends Component {
    render() {
        return (
            <div className="d-flex justify-content-around flex-wrap">
                {this.props.posts && this.props.posts.map((el, i) => (
                    <Card className="m-2" style={{ width: '15rem' }} key={i}>
                        <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500" + el.poster_path} />
                        {/* <Card.Body>
                            <Card.Title className="text-dark text-center">{el.title}</Card.Title>
                            <Button className="w-100" variant="success">Detail</Button>
                        </Card.Body> */}
                    </Card>
                ))}
            </div>
        );
    }
}