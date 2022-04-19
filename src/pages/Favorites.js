import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../styles/Favorites.css";

class Favorites extends React.Component {
    render() {
        return (
            <Container>
                <Row xs={2} md={3} lg={6} className='my-3 d-flex justify-content-evenly'>
                <Col>
                    <Image fluid src="https://image.tmdb.org/t/p/w500//74xTEgt7R36Fpooo50r9T25onhq.jpg"></Image>
                </Col>
                <Col>
                    <Image fluid src="https://image.tmdb.org/t/p/w500//qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg"></Image>
                </Col>
                <Col>
                    <Image fluid src="https://image.tmdb.org/t/p/w500//6nhwr1LCozBiIN47b8oBEomOADm.jpg"></Image>
                </Col>
                <Col>
                    <Image fluid src="https://image.tmdb.org/t/p/w500//sqLowacltbZLoCa4KYye64RvvdQ.jpg"></Image>
                </Col>
                </Row>
            </Container>
        )
    }
}

export default Favorites;