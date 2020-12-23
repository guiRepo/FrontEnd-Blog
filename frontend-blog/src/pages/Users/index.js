import React, { Component } from 'react'
import apiUser from '../../api/apiUser'

class ListagemUsers extends Component {

    state = {
        users: [],
    }

    async componentDidMount() {
        const response = await apiUser.get('')

            console.log(response)
        this.setState({ users: response.data })
    }

    render() {
        const { users } = this.state

        return (
            <div>
                <h1> Listar usuarios </h1>
                {console.log(users)}
                {users.map(user => (
                    <ul key={user.id}>
                        <a>{user.name}</a>
                    </ul>
                ))}
            </div>
        )
    }
}


export default ListagemUsers