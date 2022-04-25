import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import "../styles/SimilarMovies.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function SimilarMovies() {
    const [dataDetail, setDataDetail] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        setIsLoading(true);

        axios.get('https://api.themoviedb.org/3/movie/' + params.id + '/similar?api_key=fe9c2107e7e76afb20fd484f3d893e7f&language=en-US&page=1')
            .then(data => {
                setDataDetail(data.data.results);
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
            {dataDetail().map((el, i) => {
                <Card className="m-2" style={{ width: '15rem' }} key={i}>
                    <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500" + el.poster_path} onClick={() => {
                        navigate('/detail/' + el.id);
                    }} />
                    {/* <Card.Body>
                        <Card.Title className="text-dark text-center">{el.title}</Card.Title>
                        <Button className="w-100" variant="success" >Detail</Button>
                    </Card.Body> */}
                </Card>
            })}
        </>
    )
}

export default SimilarMovies;