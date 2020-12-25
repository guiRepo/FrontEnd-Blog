import React, { Component } from "react";


class ModalPost extends Component {
  render() {
    return (
      <div className="divComments"> 
      <ul>
        <h1 className="tituloComments">Comentarios do post</h1>
        {this.props.comment.length > 0 &&
          this.props.comment.map((comment) => {
            return (
              <>
                <p className="contentComments">{comment.email}</p>
                <p className="contentComments">{comment.body}</p>
                <p className="contentComments">-----------</p>
              </>
            );
          })}
        <p className="contentComments"> o segundo texto é: {this.props.post.body}</p>
      </ul>
      </div>
    );
  }
}

export default ModalPost;