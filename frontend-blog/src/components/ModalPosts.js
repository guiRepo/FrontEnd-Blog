import { render } from '@testing-library/react'
import React, { Component } from 'react'
import axios from 'axios'


class Modal extends Component {
    constructor (props){
        super(props)
        this.state = {
            comment: []
        }
    }


    async componentDidMount() {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/post/${this.props.post.id}/comments`)
        
        this.setState({ comment: response.data })
 
    }

    render() {
        const { comment } = this.state

        console.log(this.props.post)
        console.log(comment)
        return (
            <ul>
                <h1>Comentarios do post</h1>
                <p>o texto é :{this.props.post.title}</p>
                <p> o segundo texto é: {this.props.post.body}</p>

            </ul >
        )
    }
}


export default Modal