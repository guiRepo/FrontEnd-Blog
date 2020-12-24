import React, { Component } from "react";
import apiPost from "../../api/apiPost";
import axios from "axios";

import Modal from "../../components/ModalPosts.js";

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
      <div>
        <h1> Listar posts </h1>

        {posts.map((post) => (
          <ul key={post.id}>
            <h3>{post.title}</h3>
            <button onClick={() => this.callComments(post)}></button>
          </ul>
        ))}
        {isModalVisible && <Modal post={post} comment={comment} />}
      </div>
    );
  }
}

export default ListagemPosts;