import React, { Component } from 'react'
import apiUser from '../../api/apiUser'
import { Button, 
         Navbar,
         NavbarBrand, 
         ListGroup, 
         ListGroupItem } from 'reactstrap'
import { AiOutlineLeft } from "react-icons/ai";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css'

import Modal from '../../components/ModalUser'

class ListagemUsers extends Component {

    state = {
        users: [],
        user: {},
        isModalVisible: false
    }

    async componentDidMount() {
        const response = await apiUser()

        console.log(response)
        this.setState({ users: response.data })
    }



    render() {
        const { users, user, isModalVisible } = this.state
        console.log(user)
        console.log(isModalVisible)

        return (

            <>
            <Navbar color="dark" className="home"><NavbarBrand href="/" className="arrowBack"><AiOutlineLeft/></NavbarBrand></Navbar>
            <div>
                <h1 className="tituloUsers"> Lista de Usuarios </h1>
                {console.log(users)}
                {users.map(user => (
                  <div className="buttons">  
                   <ListGroup> 
                    <ul key={user.id}>
                        <div className="itensLista">
                        <ListGroupItem className="List">
                            <a>{user.name}</a>
                        </ListGroupItem>
                        </div>
                        <Button onClick={() => this.setState({ isModalVisible: true, user })}>Detalhes</Button>
                    </ul>
                </ListGroup>
                    </div>
                )
                )}
                {isModalVisible && <Modal user={user} />}
                
            </div>
            <Navbar color="dark">.</Navbar>
        </>
        )
    }
}


export default ListagemUsers