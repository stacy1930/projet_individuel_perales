import axios from "axios";
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card'
import './listArticles.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


const ListArticles = ({ history }) => {

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

    function handleDelete(id) {

        axios.delete("https://localhost:8000/article/" + id)
            .then((result) => {
                console.log(result.data);
                history.push('/')
            })

    }

    return (

        <div>
            <Card className="w-75 mx-auto my-4 shadow-lg bg-white rounded ">
                <Card.Header as="h3" className="titleCard text-center">
                    Nos articles
        </Card.Header>
                <Card.Body>
                    <div className="mx-auto my-4">
                        <Button className="addarticle mx-2 p-3" href="/admin/addArticle">+ Ajouter un article</Button>
                    </div>

                    <Table striped hover className="px-5">
                        <thead>
                            <tr>
                                <td>Id</td>
                                <td>Titre</td>
                                <td>Sous-titre</td>
                                <td>image</td>
                                <td>Contenu</td>
                                <td>Date de publication</td>
                                <td>Catégorie</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            {articles.map(article => (
                                //L'attribut key est obligatoire pour le dataBinding
                                <tr key={article.id}>
                                    <td>{article.id}</td>
                                    <td>{article.title}</td>
                                    <td>{article.subtitle}</td>
                                    <td>{(article.image) ? article.image : 'Aucune image'}</td>
                                    <td className="text-justify">{article.content}</td>
                                    <td>{article.publicationDate}</td>
                                    <td>{article.category}</td>
                                    <td><Button className="btnUpdate mx-2 p-3" href={`/admin/addArticle/${article.id}`}>Modifier</Button></td>

                                    <td><Button className="addarticle mx-2 p-3" onClick={() => handleDelete(article.id)}>Supprimer</Button></td>

                                </tr>
                            ))}
                        </tbody>
                    </Table>



                </Card.Body >
            </Card >
        </div >

    );
}

export default ListArticles;