import React from "react";
import { useNavigate } from "react-router-dom";
import "./Logout.css";
import { Button } from "react-bootstrap";

export default function Logout() {
  const navigate = useNavigate();
  const loggingOut = () => {
    window.sessionStorage.clear();
    navigate("/login");
  };
  return (
    <div className="profile">
      <div >
        <h1 >Successfully Logged IN</h1>
        <Button className="logout__button" onClick={loggingOut}>
          Logout
        </Button>
      </div>
    </div>
  );
}
