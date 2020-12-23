import React, { Component } from 'react'
import apiPost from '../../api/apiPost'

class ListagemPosts extends Component {

    state = {
        posts: [],
    }

    async componentDidMount() {
        const response = await apiPost.get('')


        this.setState({ posts: response.data })
    }

    render() {
        const { posts } = this.state

        return (
            <div>
                <h1> Listar posts </h1>
                {console.log(posts)}
                {posts.map(posts => (
                    <ul key={posts.id}>
                        <a>{posts.title}</a>
                    </ul>
                ))}
            </div>
        )
    }
}


export default ListagemPosts