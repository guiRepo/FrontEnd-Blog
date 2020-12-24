import React, { Component } from 'react'
import apiPost from '../../api/apiPost'

import Modal from '../../components/ModalPosts.js'


class ListagemPosts extends Component {

   

    state = {
        posts: [],
        post: {},
        isModalVisible: false
    }

    async componentDidMount() {
        const response = await apiPost()

        this.setState({ posts: response.data })
    }
    
    render() {
        const { posts, post, isModalVisible } = this.state
        return (
            <div>
                <h1> Listar posts </h1>
                
                {posts.map(post => (
                    <ul key={post.id}>
                        <a>{post.title}</a>
                        <button onClick={() => this.setState({ isModalVisible: true, post })}></button>
                    </ul>
                ))}
                {isModalVisible && <Modal post={ post }/>}
            </div>
        )
    }
}


export default ListagemPosts