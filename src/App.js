import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import AllPosts from './components/AllPosts/AllPosts';
import Login from './components/Login/Login';
import AddPost from './components/AddPost/AddPost';
import EditPost from './components/EditPost/EditPost';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';


function App() {
  return (
    <div className="App">
      <Router>
          <NavBar />
          <Switch>            
            <Route path="/login" component={Login} />
            <Route path="/add" component={AddPost} />
            <Route path="/edit/:id" component={EditPost} />
            <Route path="/allposts" component={AllPosts} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
