import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card'
import logo from '../../article.png';
import './home.css';


const Home = () => {

    let [articles, setArticle] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/article/listArticle')
            .then(response => {
                console.log(response.data);
                setArticle(response.data);
            }
            )
            .catch((error) => { console.log(error) })
    }, []);
    return (
        <div>
            <Card className="w-75 mx-auto my-4 shadow-lg bg-white rounded ">
                <Card.Header as="h3" className="titleCard text-center">
                    Bienvenue sur notre Blog !
        </Card.Header>
                <Card.Body>
                    <Card.Text> Voici un petit aperçu de nos articles. Vous pouvez créer vos propres articles en allant dans l'onglet prévu à cet effet!</Card.Text>
                    {articles.map(article => (
                        < Card className="my-4 shadow bg-white rounded cardListConcert text-center concert__card" >
                            < Card.Img variant="top" src={logo} />
                            <Card.Body>
                                <Card.Text as="h5">{article.title}</Card.Text>
                                <Card.Text>{article.subtitle}</Card.Text>
                                <Card.Text>{article.publicationDate}</Card.Text>
                                <Card.Text>{article.category}</Card.Text>
                                <Card.Link href={`/articleDetail/${article.id}`} className="btn btnDetail">Voir l'article complet</Card.Link>
                            </Card.Body>
                        </Card>
                    ))}


                </Card.Body >
            </Card >

        </div >

    );
}

export default Home;