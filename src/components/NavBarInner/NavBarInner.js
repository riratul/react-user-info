import React from "react";
import { Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function NavBarInner() {
  const history = useHistory();
  const handleLogout = () => {
    history.push("/login");
  };

  return (
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
  );
}

export default NavBarInner;
