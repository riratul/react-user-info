import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import services from "../../services";
import "./Login.scss";

function Login() {
  const history = useHistory();

  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const resp = await services.getAllUsers();
      setUsers(resp.data);
    } catch (error) {
      alert("Failed to fetch users.");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const allUsernames = users.map((userItem) => userItem.username.toLowerCase());

  const handleLogin = async () => {
    // console.log('Hellooooooo' + username );
    if (!username) {
      alert("Post enter your username!");
      return;
    }
    const lowerCaseUsername = username.toLowerCase();
    const found = allUsernames.includes(lowerCaseUsername);
    if (found) {
      history.push("/allposts");
    } else {
      alert("Provided username does not exist!");
    }
  };

  return (
    <div>
      {/* {users.map(userItem => (
                <div>
                    <p>{userItem.username}</p>
                </div>            
                ))} */}
      <div className="container-login">
        <div className="login-box">
          <form>
            <span className="form-logo"></span>
            <h1>User Log in</h1>
            <div className="input-box validate-input">
              <input
                className="input100"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
              />
              <span className="input-focus"></span>
            </div>
            <input
              className="login-form-btn"
              onClick={handleLogin}
              type="submit"
              value="Sign in"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
