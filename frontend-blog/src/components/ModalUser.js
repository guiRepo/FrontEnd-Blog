import React from 'react'
import {Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ModalUsers = ({ user, isModalVisible, toggle }) => (
    <Modal isOpen={isModalVisible}>
      <ModalHeader className="modalHeader" toggle={toggle}>Detalhes do Usuario</ModalHeader>
         <ModalBody className="modalBody">  
                <> 
                    <ul>            
                    <h1 className="tituloUsuario" >Detalhes do Usuario</h1>
                    <p className="detalhesUsuario">Nome: {user.name}</p>
                    <p className="detalhesUsuario">Username: {user.username}</p>
                    <p className="detalhesUsuario">Email: {user.email}</p>
                    <p className="detalhesUsuario">Telefone: {user.phone}</p>
                    <p className="detalhesUsuario">Website: {user.website}</p>
                    </ul>
                </>
         </ModalBody>
      <ModalFooter className="modalFooter"></ModalFooter>
    </Modal>
)

export default ModalUsers;