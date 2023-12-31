// components/LoginPage.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginAsync } from "../../features/authSlice";
import { Button } from "reactstrap";

const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [role,setRole] = useState("");
  const role = "Admin";
  const handleLogin = () => {
    console.log("email, password, admin", email, password, role);
    dispatch(loginAsync({ email, password, role }));
  };

  return (
    <div>
      <h2>Login Page</h2>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Button color="success" onClick={handleLogin}>Login</Button>
    </div>
  );
};

export default LoginPage;
