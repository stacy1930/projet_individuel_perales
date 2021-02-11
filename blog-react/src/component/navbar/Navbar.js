import './navbar.css';
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


const NavBar = () => {

    return (
        <div>
            <div>

                <Navbar className="navbar">

                    <Navbar.Brand href="/">
                        <Nav>
                            Blog-REACT
                        </Nav>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav>
                            <Nav.Link className="link" href="/" >Home</Nav.Link>
                            <Nav.Link className="link" href="/admin/listArticles" >Liste des articles</Nav.Link>
                            <Nav.Link className="link" href="/admin/addArticle">Ajouter un article</Nav.Link>
                        </Nav>


                    </Navbar.Collapse>

                </Navbar>

            </div>

        </div >

    );
}

export default NavBar;