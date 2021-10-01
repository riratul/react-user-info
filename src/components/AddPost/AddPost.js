import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Button
} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import services from '../../services';
import './AddPost.scss';



function AddPost() { 
  const history = useHistory();
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');

  const handleSubmit = async () => {
    
    try {
      if(!postTitle || !postBody) {
        alert('Post title or body is required!');
        return;
      }


      const post = {
        postTitle,
        postBody,
      };
      const resp = await services.addPost(post);
      console.log('ADDING RESPONSE' + JSON.stringify(resp))
      alert('Post added successfully!');
      history.replace('/');



    }catch(error) {
      console.log(error);
      alert('Failed to add post!');
    }
  }

  return (
    <Container>
      <Row>
        <Col className='col-md-6 offset-md-3'>
          <Form>
            <Form.Group className='form-row'>
              <Form.Label>Post Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Post title ..."
                onChange={e => setPostTitle(e.target.value)}
                value={postTitle}
              />
            </Form.Group>

            <Form.Group className='form-row'>
              <Form.Label>Post Body</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Post Body ..."
                onChange={e => setPostBody(e.target.value)}
                value={postBody}
              />
            </Form.Group>

            <Form.Group className='form-row'>
              <Button
                variant="primary"
                onClick={handleSubmit}
              >
                Add
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddPost;
