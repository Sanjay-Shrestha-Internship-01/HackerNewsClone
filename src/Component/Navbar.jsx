import React, { Component } from "react";
import logo from "../images/abc.gif"
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="nav-head">
            <div><img className="nav-logo" src={logo} alt="logo" /></div>
            <div><h3>Hacker News</h3></div>
          </div>
          <ul>
            <li>New</li>
            <li>Best </li>
            <li>Top</li>
            <li>Comments</li>
          </ul>
        </nav>
      </div>
    );
  }
}
