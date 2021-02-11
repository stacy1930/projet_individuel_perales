import Card from 'react-bootstrap/Card'
import axios from "axios";
import React, { useEffect, useState } from 'react';

const ArticleDetail = ({ match }) => {

    const [articles, setArticle] = useState([]);

    function getArticle(id) {
        return axios.get('https://127.0.0.1:8000/article/detail?id=' + id)
    }
    useEffect(() => {
        getArticle(match.params.id).then((response) => setArticle(response.data))
            .catch((error) => { console.log(error) })
    }, []);


    return (
        <div className="test">


            <Card className="w-75 mx-auto my-4 shadow-lg bg-white rounded ">
                <Card.Header as="h3" className="titleCard text-center">
                    Détail de l'article
        </Card.Header>
                <Card.Body>
                    <Card.Text as="h5">{articles.title}</Card.Text>
                    <Card.Text>{articles.subtitle}</Card.Text>
                    <Card.Text className="text-justify w-75 mx-auto">{articles.content}</Card.Text>
                    <Card.Text>Date de publication :{articles.publicationDate}</Card.Text>
                    <Card.Text>Catégorie de l'article : {articles.category}</Card.Text>
                </Card.Body>

            </Card >





        </div>

    );
}

export default ArticleDetail;