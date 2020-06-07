import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      {/* html href에서는 강제로 새로고침시킨다 그래서 link to 를 사용 */}
      <Link to="/about">About</Link>
      <Link to="/board">Board</Link>
      
    </div>
  );
}

export default Navigation;
