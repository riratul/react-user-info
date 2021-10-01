import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import services from "../../services";
import NavBarInner from "../NavBarInner/NavBarInner";

const EditPost = ({ match: { params } }) => {
  const history = useHistory();

  const postId = params.id;
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  const loadPost = async () => {
    try {
      const resp = await services.editPost(postId);
      const post = resp.data;
      setPostTitle(post.title);
      setPostBody(post.body);
    } catch (error) {
      alert("Failed to get post.");
    }
  };

  useEffect(() => {
    loadPost();
  }, []);

  const handleSubmit = async () => {
    try {
      if (!postTitle || !postBody) {
        alert("Title or post URL is required!");
        return;
      }
      const post = {
        postTitle,
        postBody,
      };
      await services.addPost(post);
      alert("Post updated successfully!");
      history.replace("/allposts");
    } catch (error) {
      console.log(error);
      alert("update post failed!");
    }
  };

  if (!postTitle || !postBody) {
    return (
      <Container>
        <Row>
          <Col>
            <p>Loading post...</p>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container>
      <NavBarInner />
      <Row>
        <Col className="col-md-6 offset-md-3">
          <h2>Edit post number {postId}</h2>
          <Form>
            <Form.Group className="formRow">
              <Form.Label>Post Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter post title ..."
                onChange={(e) => setPostTitle(e.target.value)}
                value={postTitle}
              />
            </Form.Group>

            <Form.Group className="formRow">
              <Form.Label>Body</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter post Body...."
                onChange={(e) => setPostBody(e.target.value)}
                value={postBody}
              />
            </Form.Group>

            <Form.Group className="formRow">
              <Button variant="primary" onClick={handleSubmit}>
                Update
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default EditPost;
