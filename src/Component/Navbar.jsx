import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="nav-head">
            <img src="../images/y18.gif" alt="logo" />
            <h3>Hacker News</h3>
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
