import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import React, { useEffect, useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap'

import './addArticle.css';

const AddArticle = ({ history, match }) => {

    const [data, setData] = useState({
        title: '', subtitle: '', image: '', content: '', publicationDate: '', category: ''
    })

    const [label, setLabel] = useState({
        button: ''
    })
    const onChange = (e) => {
        e.persist();
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const dataInput = {
            title: data.title, subtitle: data.subtitle, image: data.image, content: data.content, publicationDate: data.publicationDate, category: data.category
        }

        if (match.params.id != null) {
            axios.post("https://localhost:8000/article/" + match.params.id + "/edit", dataInput)
                .then((result) => {
                    console.log(result.data);
                    history.push('/admin/listArticles')
                })
        } else {
            axios.post("https://localhost:8000/article/new", dataInput)
                .then((result) => {
                    console.log(result.data);
                    history.push('/admin/listArticles')
                })
        }

    }

    React.useEffect(() => {
        setLabel({ button: "Créer un article" })
        if (match.params.id != null) {
            setLabel({ button: "Modifier l'article" })
            axios.get('https://localhost:8000/article/detail?id=' + match.params.id).then(res => {
                console.log(res);
                if (res.data.image == null) { res.data.image = "" }
                setData({
                    title: res.data.title,
                    subtitle: res.data.subtitle,
                    content: res.data.content,
                    publicationDate: res.data.publicationDate,
                    category: res.data.category,
                    image: res.data.image
                })
            }).catch((error) => { console.log(error) })
        }
    }, []
    );



    return (
        <div>
            <Card className="w-75 mx-auto my-4 shadow-lg bg-white ">
                <Card.Header as="h3" className="titleCard text-center">
                    Créer/ Modifier un Article
                </Card.Header>
                <Card.Body>
                    <Form className="w-75 mx-auto" onSubmit={handleSubmit}>
                        <Form.Group controlId="formCreateTitle">
                            <Form.Label>Title*</Form.Label>
                            <Form.Control name="title" type="text" placeholder="Titre" required onChange={onChange} value={data.title} />
                        </Form.Group>
                        <Form.Group controlId="formCreateSubTitle">
                            <Form.Label>Sous-titre*</Form.Label>
                            <Form.Control name="subtitle" type="text" placeholder="Sous-titre" required onChange={onChange} value={data.subtitle} />
                        </Form.Group>
                        <Form.Group controlId="formCreateimage">
                            <Form.Label>Image</Form.Label>
                            <Form.Control name="image" type="text" placeholder="image" onChange={onChange} value={data.image} />
                        </Form.Group>
                        <Form.Group controlId="formCreateimage">
                            <Form.Label>Date de publication*</Form.Label>
                            <Form.Control name="publicationDate" type="text" placeholder="publicationDate" onChange={onChange} value={data.publicationDate} />
                        </Form.Group>
                        <Form.Group controlId="formCreateCategory">
                            <Form.Label>Categorie*</Form.Label>
                            <Form.Control name="category" type="text" placeholder="category" onChange={onChange} value={data.category} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Contenu de l'article</Form.Label>
                            <Form.Control as="textarea" rows={3} name="content" required placeholder="... Contenu de votre article ..." onChange={onChange} value={data.content} />
                        </Form.Group>


                        <Button type="submit" className=" mb-2 w-50">
                            {label.button}
                        </Button>

                    </Form>
                </Card.Body >
            </Card >

        </div >

    );
}

export default AddArticle;