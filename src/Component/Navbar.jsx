import React, { Component } from "react";
import logo from "../images/abc.gif";
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="nav-head">
            <div>
              <img className="nav-logo" src={logo} alt="logo" />
            </div>
            <div>
              <h3>Hacker News</h3>
            </div>
          </div>
          <ul>
            <Link to="/">
              <li>New</li>
            </Link>
            <Link to="/best">
              <li>Best </li>
            </Link>
            <Link to="/top">
              <li>Top</li>
            </Link>
            <Link to="/com">
              <li>Comments</li>
            </Link>
          </ul>
        </nav>
      </div>
    );
  }
}
