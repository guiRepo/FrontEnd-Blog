import React, { Component } from 'react'
import apiUser from '../../api/apiUser'

import Modal from '../../components/Modal'

class ListagemUsers extends Component {

    state = {
        users: [],
        user: {},
        isModalVisible: false
    }

    async componentDidMount() {
        const response = await apiUser.get('')

        console.log(response)
        this.setState({ users: response.data })
    }



    render() {
        const { users, user, isModalVisible } = this.state
        console.log(user)
        console.log(isModalVisible)

        return (
            <div>
                <h1> Listar usuarios </h1>
                {console.log(users)}
                {users.map(user => (
                    <ul key={user.id}>
                        <a>{user.name}</a>
                        <button onClick={() => this.setState({ isModalVisible: true, user })}>Detalhes</button>
                    </ul>

                )
                )}
                {isModalVisible && <Modal user={user} />}
            </div>
        )
    }
}


export default ListagemUsers