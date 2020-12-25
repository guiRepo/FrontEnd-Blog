import React, { Component } from "react";
import apiPost from "../../api/apiPost";
import axios from "axios";
import { Button, 
         Navbar,
         NavbarBrand, 
         ListGroup, 
         ListGroupItem } from 'reactstrap'
         
import { AiOutlineLeft } from "react-icons/ai";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css'

import ModalPost from "../../components/ModalPosts.js";

class ListagemPosts extends Component {
  state = {
    posts: [],
    post: {},
    comment: [],
    isModalVisible: false,
  };

  async componentDidMount() {
    const response = await apiPost();

    this.setState({ posts: response.data });
  }

  callComments = async (post) => {
     const response = await axios.get(
      `https://jsonplaceholder.typicode.com/post/${post.id}/comments`
    );

    this.setState({ isModalVisible: true, post, comment: response.data  })
  }

  render() {
    const { posts, post, isModalVisible, comment } = this.state;
    return (
    <>
    <Navbar color="dark" className="home"><NavbarBrand href="/" className="arrowBack"><AiOutlineLeft/></NavbarBrand></Navbar>
      <div>
        <h1 className="tituloPosts"> Lista de Posts </h1>

        {posts.map((post) => (
          <ListGroup>
          <ul key={post.id}>
            <ListGroupItem>
            <h3>{post.title}</h3>
            <Button className="botaoComments" onClick={() => this.callComments(post)}>Comentarios</Button>
            <Button className="botaoComments" onClick={() => this.setState({isModalVisible:false})}>Fechar</Button>
            </ListGroupItem>
          </ul>          
          </ListGroup>         
        ))}
        <p></p> 
        {isModalVisible && <ModalPost post={post} comment={comment} />}
      </div>
      <Navbar color="dark">.</Navbar>
    </>
    );
  }
}

export default ListagemPosts;