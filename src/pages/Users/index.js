import React, { Component } from 'react'
import apiUser from '../../api/apiUser'
import { Button, 
         Navbar, 
         ListGroup, 
         ListGroupItem,
         NavbarBrand, } from 'reactstrap'
import { AiOutlineLeft } from "react-icons/ai";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css'

import ModalUsers from '../../components/ModalUser';

class ListagemUsers extends Component {

    state = {
        users: [],
        user: {},
        isModalVisible: false
    }

    async componentDidMount() {
        const response = await apiUser()
        this.setState({ isModalVisible: false , users: response.data })
    }    

    toggle = () => this.setState({ isModalVisible: false });


    render() {
        const { users, user, isModalVisible } = this.state

        return (

        <>
            <Navbar color="dark">
                <NavbarBrand href="/" className="arrowBack">
                    <AiOutlineLeft />
                </NavbarBrand>
            </Navbar>
            <div>
                <h1 className="tituloUsers"> Lista de Usuários </h1>
                {users.map(user => (
                <div className="buttons">  
                   <ListGroup> 
                    <ul key={user.id}>
                     <div className="itensLista">
                      <ListGroupItem className="List">
                        <h5 className="tituloNome" >{user.name}</h5>
                      </ListGroupItem>
                     </div>
                      <Button className="botaoDetalhes" onClick={() => this.setState({ isModalVisible: true, user })}>Detalhes</Button>
                    </ul>
                   </ListGroup>

                </div>
                ))}
                {isModalVisible && (
                    <ModalUsers 
                        user={user} 
                        isModalVisible={isModalVisible} 
                        toggle={this.toggle}
                />)}
            </div>
            <Navbar color="dark"></Navbar>
        </>
        )
    }
}


export default ListagemUsers