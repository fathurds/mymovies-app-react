import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import "../styles/Detail.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import SimilarMovies from "../components/SimilarMovies";

function Detail() {
    const [dataDetail, setDataDetail] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const params = useParams();

    useEffect(() => {
        setIsLoading(true);

        axios.get('https://api.themoviedb.org/3/movie/' + params.id + '?api_key=fe9c2107e7e76afb20fd484f3d893e7f&language=en-US')
            .then(data => {
                setDataDetail(data.data);
            })
            .catch(err => {
                console.log(err, 'ini error dari catch');
            })
            .finally(() => {
                setIsLoading(false);
            })

    }, [params]);

    if (isLoading) {
        return <h4>Now Loading...</h4>
    }

    return (
        <>
            <Row className="m-5">
                <Col lg="5" className="text-center">
                    <img src={"https://image.tmdb.org/t/p/w500" + dataDetail.poster_path} width={"400px"}></img>
                </Col>
                <Col className="px-5">
                    <h1>{dataDetail.title}</h1>
                    <hr></hr>
                    <h5>Genre : {dataDetail.genres.map((el, i) => {
                        if (i == dataDetail.genres.length - 1) {
                            return dataDetail.genres[i].name;
                        }
                        return dataDetail.genres[i].name + ', ';
                    })}</h5>
                    <hr></hr>
                    <h5>Release Date: {dataDetail.release_date}</h5>
                    <hr></hr>
                    <h5>Duration: {Math.floor(dataDetail.runtime / 60)} hour {dataDetail.runtime % 60} minutes</h5>
                    <hr></hr>
                    <h5>Production Companies : {dataDetail.production_companies.map((el, i) => {
                        if (i == dataDetail.production_companies.length - 1) {
                            return dataDetail.production_companies[i].name;
                        }
                        return dataDetail.production_companies[i].name + ', ';
                    })}</h5>
                    <hr></hr>
                    <h5>Status: {dataDetail.status}</h5>
                    <hr></hr>
                    <h5>Overview: </h5>
                    <p>{dataDetail.overview}</p>
                    <hr></hr>
                </Col>
            </Row>
        </>
    );
}

export default Detail;