import React, { Component } from "react";
import axios from "axios";
import moment from "moment";
import CONSTANTS from "../Services/Hnapi";
const { baseUrl } = CONSTANTS;
export default class Comments extends Component {
  constructor() {
    super();
  }

  state = {
    comments: [],
  };

  componentDidMount() {
    const repo = [];
    const comments = [];
    axios
      .get(`${baseUrl}/maxitem.json`)
      .then((res) => {
        for (let i = 0; i < 30; i++) {
          axios.get(`${baseUrl}/item/${res.data - i}.json`).then((put) => {
            comments.push(put.data);
            this.setState({ comments: comments });
          });
        }
      })
      .catch((e) => {
        console.log("error detected");
      });
  }

  render() {
    return (
      <div>
        {this.state.comments.map((comment) => (
          <div>
            <p>by {comment.by}</p>
            <p> {moment.unix(comment.time).fromNow()} </p>
            <p>id {comment.id}</p>
            <p> {comment.text}</p>

            <p>type:{comment.type}</p>
          </div>
        ))}
      </div>
    );
  }
}
