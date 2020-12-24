import React, { Component } from "react";

class Modal extends Component {
  render() {
    return (
      <ul>
        <h1>Comentarios do post</h1>
        {this.props.comment.length > 0 &&
          this.props.comment.map((comment) => {
            return (
              <>
                <p>{comment.email}</p>
                <p>{comment.body}</p>
                <p>-----------</p>
              </>
            );
          })}
        <p> o segundo texto é: {this.props.post.body}</p>
      </ul>
    );
  }
}

export default Modal;