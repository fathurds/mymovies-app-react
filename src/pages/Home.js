import React, { Component } from "react";
import { Container, Row, Col, Image } from 'react-bootstrap';
import "../styles/Home.css";

export default class Home extends Component {
    render() {
        return (
            <Container fluid>
                <Row xs={2} md={3} lg={6} className='my-3'>
                <Col>
                    <Image fluid src="https://image.tmdb.org/t/p/w500//74xTEgt7R36Fpooo50r9T25onhq.jpg"></Image>
                </Col>
                <Col>
                    <Image fluid src="https://image.tmdb.org/t/p/w500//qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg"></Image>
                </Col>
                <Col>
                    <Image fluid src="https://image.tmdb.org/t/p/w500//abPQVYyNfVuGoFUfGVhlNecu0QG.jpg"></Image>
                </Col>
                <Col>
                    <Image fluid src="https://image.tmdb.org/t/p/w500//6nhwr1LCozBiIN47b8oBEomOADm.jpg"></Image>
                </Col>
                <Col>
                    <Image fluid src="https://image.tmdb.org/t/p/w500//sqLowacltbZLoCa4KYye64RvvdQ.jpg"></Image>
                </Col>
                <Col>
                    <Image fluid src="https://image.tmdb.org/t/p/w500//3pTwMUEavTzVOh6yLN0aEwR7uSy.jpg"></Image>
                </Col>
                </Row>
                <Row xs={2} md={3} lg={6} className='my-3'>
                <Col>
                    <Image fluid src="https://image.tmdb.org/t/p/w500//jrgifaYeUtTnaH7NF5Drkgjg2MB.jpg"></Image>
                </Col>
                <Col>
                    <Image fluid src="https://image.tmdb.org/t/p/w500//ejXBuNLvK4kZ7YcqeKqUWnCxdJq.jpg"></Image>
                </Col>
                <Col>
                    <Image fluid src="https://image.tmdb.org/t/p/w500//yD9RhgIVydQNBK7OLEbCWYcWMUd.jpg"></Image>
                </Col>
                <Col>
                    <Image fluid src="https://image.tmdb.org/t/p/w500//moLnqJmZ00i2opS0bzCVcaGC0iI.jpg"></Image>
                </Col>
                <Col>
                    <Image fluid src="https://image.tmdb.org/t/p/w500//8eOgpzYUV4PxbDl64vrWpWTEAqb.jpg"></Image>
                </Col>
                <Col>
                    <Image fluid src="https://image.tmdb.org/t/p/w500//e4koV8iC2cCM57bqUnEnIL2a2zH.jpg"></Image>
                </Col>
                </Row>
                <Row xs={2} md={3} lg={6} className='my-3'>
                <Col>
                    <Image fluid src="https://image.tmdb.org/t/p/w500//nmD0vZk8jQg1Suhs0iv9cj0xdtZ.jpg"></Image>
                </Col>
                <Col>
                    <Image fluid src="https://image.tmdb.org/t/p/w500//aSRvK4kLJORBrVdlFn2wrGx8XPv.jpg"></Image>
                </Col>
                <Col>
                    <Image fluid src="https://image.tmdb.org/t/p/w500//5vePsmbekQ1ysXS6f0lhzgCwvc4.jpg"></Image>
                </Col>
                <Col>
                    <Image fluid src="https://image.tmdb.org/t/p/w500//wxopaacKXHZUq92gVco2q9Q7fAE.jpg"></Image>
                </Col>
                <Col>
                    <Image fluid src="https://image.tmdb.org/t/p/w500//sUw081I0k5JWL6NpTaDRjMpLKwr.jpg"></Image>
                </Col>
                <Col>
                    <Image fluid src="https://image.tmdb.org/t/p/w500//1gTnopPJgauN46CYGobPyZCZQTn.jpg"></Image>
                </Col>
                </Row>
            </Container>
        );
    }
}