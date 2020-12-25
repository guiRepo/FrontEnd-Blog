import React from 'react'
import { Button, Navbar } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css'


const Main = (props) => {
    return (
        <>
            <Navbar color="dark">.</Navbar>
            <h1 className="titulo">Gerenciamento do Blog</h1>
            <div className="buttons">
                <Button className="botao"><a className="botaoText"href="/users"> Visualizar Usuarios </a></Button>
                <Button className="botao"><a className="botaoText" href="/posts"> Visualizar Posts </a></Button>
            </div>
            <div className="footer">
                Created by Guilherme Andre © guiRepo/FrontEnd-Blog
            </div>
        </>
    )
}

export default Main