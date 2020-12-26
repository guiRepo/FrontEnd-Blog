import React from "react";
import {Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ModalPost = ({ comment, post, isModalVisible, toggle }) => (
  <Modal isOpen={isModalVisible}>
    <ModalHeader className="modalHeader" toggle={toggle}>Comentarios do post</ModalHeader>
      <ModalBody className="modalBody">
      {comment.length > 0 &&
        comment.map((comment) => {
          return (
            <>
                <p className="contentComments">{comment.email}</p>
                <p className="contentComments">{comment.body}</p>
                <p className="contentComments">-----------</p>
            </>
            );
          })}
      </ModalBody>
    <ModalFooter className="modalFooter"></ModalFooter>
  </Modal>
);

export default ModalPost;