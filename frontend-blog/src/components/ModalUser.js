import React from 'react'


const Modal = ({ user }) => {

    return (
        
        <ul>            
        <h1 className="tituloUsuario" >Detalhes do Usuario</h1>
        <p className="detalhesUsuario">{user.name}</p>
        <p className="detalhesUsuario">{user.username}</p>
        <p className="detalhesUsuario">{user.email}</p>
        </ul>
        
    )
}

export default Modal;