import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container mt-4 text-center">
      <h1>Welcome to Task Manager</h1>
      <p>Organize your tasks efficiently with due dates and priorities.</p>
      <button
        className="btn btn-primary mt-3"
        onClick={() => navigate("/todo")}
      >
        Go to Todo List
      </button>
    </div>
  );
};

export default Home;
