import React from "react";
import { Button, Navbar } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";

const Main = ({history}) => {
  return (
    <>
      <Navbar color="dark">.</Navbar>
      <h1 className="titulo">Gerenciamento do Blog</h1>
      <div className="buttons">
        <Button className="botao" onClick={() => history.push("/users")}>
          <h5 className="botaoText">Visualizar Usuarios</h5>
        </Button>
        <Button className="botao" onClick={() => history.push("/posts")}>
          <h5>
            Visualizar Posts
          </h5>
        </Button>
      </div>
      <Navbar className="footer" color="dark">
          Created by Guilherme Andre © guiRepo/FrontEnd-Blog
      </Navbar>
    </>
  );
};

export default Main;