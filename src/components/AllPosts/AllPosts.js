import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import services from "../../services";
import PostItem from "../PostItem/PostItem";
import "./AllPosts.scss";

const AllPosts = (props) => {
  const [posts, setPosts] = useState(null);

  const handleLogout = () => {
    props.history.push("/login");
  };

  const fetchPosts = async () => {
    try {
      const resp = await services.getAllPosts();
      setPosts(resp.data);
    } catch (error) {
      alert("Failed to fetch posts.");
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (!posts) {
    return (
      <Container>
        <Col>
          <p>Loading posts...</p>
        </Col>
      </Container>
    );
  }

  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-end post-nav">
          <a className="btn btn-primary" href="/allposts">
            All Posts
          </a>
          <a className="btn btn-primary" href="/add">
            Add New Post
          </a>
          <a className="btn btn-primary" onClick={handleLogout}>
            Logout
          </a>
        </Col>
      </Row>
      <Row>
        {posts.reverse().map((postItem) => (
          <PostItem
            key={postItem.id}
            id={postItem.id}
            title={postItem.title}
            body={postItem.body}
          />
        ))}
      </Row>
    </Container>
  );
};

export default AllPosts;
