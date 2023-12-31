// App.js
import React from "react";
import { useSelector } from "react-redux";
import HomePage from "./components/HomePage/Homepage";
import LoginPage from "./components/Login/LoginPage";

function App() {
  const username = useSelector((state) => state.auth.username);

  return <div className="App">{username ? <HomePage /> : <LoginPage />}</div>;
}

export default App;
