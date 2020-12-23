import React, { Component } from 'react'
import api from './api'
import Routes from './routes'


class App extends Component{

  state = {
    users: [],
  }

  async componentDidMount(){
    const response = await api.get('')
    
    
    this.setState({ users: response.data})
  }

  render(){
    const { users } = this.state

    return(
      <div>
        <h1> Listar usuarios </h1>
        {console.log(users)}
        {users.map(user => (
          <li key={user.id}>
            <h2><strong>Name:</strong></h2>
            <a href="#">{user.name}</a>
          </li>
        ))}
      </div>
    )
  }
}
export default App;
