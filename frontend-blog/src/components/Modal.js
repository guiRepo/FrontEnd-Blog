import React from 'react'


const Modal = ({ user }) => {
    console.log(user)
    return (
        <ul>
            <h1>Detalhes do Usuario</h1>
        <p>{user.name}</p>
        <p>{user.username}</p>
        <p>{user.email}</p>
        </ul>
    )
}

export default Modal;