import React from 'react'
import axios from 'axios'




const Modal = ({ post }) => {

    



    console.log(post)
    //console.log(resp.data)


    return (
        <ul key={post.userId}>
            <h1>Comentarios do Post</h1>
            <p>{post.title}</p>
            <p>{post.body}</p>
                <ul >

                </ul>
        </ul>
    )
}

export default Modal;