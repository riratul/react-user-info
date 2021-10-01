import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Col } from 'react-bootstrap';
import services from '../../services';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PostItem.scss'


const PostItem = ({ id, title, body }) => {  

  const deletePost = async () => {

    if (window.confirm('Are you sure you wish to delete this item?')){
      try {
        const resp = await services.deletePost(id);
        console.log('DELETING RESPONSE' + JSON.stringify(resp))
        alert('Post deleted!')
        window.location.reload()
      }catch(error) {
        console.log(error)
        alert('Delete post failed!')
      }
        
    }

  }

  return (
    <Col md="4"  className='d-flex align-items-stretch post-card'>
      <Card>
        <Card.Header>
          {id}
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <p>{body}</p>
        </Card.Body>
        <Card.Footer>
            <Link to={`/edit/${id}`}>
              <Button variant="primary">Edit</Button>
            </Link>
            <Button   onClick={deletePost}  variant="danger">Delete</Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default PostItem;
