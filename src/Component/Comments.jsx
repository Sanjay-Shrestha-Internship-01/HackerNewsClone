import React, { Component } from "react";
import axios from "axios";
import CONSTANTS from "../Services/Hnapi";
const { baseUrl } = CONSTANTS;
export default class Comments extends Component {
  constructor() {
    super();
  }

  state = {
    comments: [],
    getStoryItem: [],
  };

  componentDidMount() {
    const repo = [];
    const comments = [];
    axios
      .get(`${baseUrl}/maxitem.json`)
      .then((res) => {
        console.log(res.data);

        for (let i = 0; i < 30; i++) {
          axios.get(`${baseUrl}/item/${res.data - i}.json`).then((put) => {
            comments.push(put.data);
            this.setState({comments: comments,});
          });
        }
        console.log(comments);
      })
      .catch((e) => {
        console.log("error detected");
      });
      
  }

  render() {
    return (
      <div>
        <h1>hello</h1>
        {this.state.comments.map((comment) => (
          <div>
            <p>{comment.by}</p>
            <p>{comment.id}</p>
            <p>{comment.text}</p>
            <p>{comment.time}</p>
            <p>{comment.type}</p>
          </div>
        ))}

        {/* ?* {this.state.getStoryItem.map((stories) => (
          <div>
            <a href={stories.url}>
              {" "}
              <h2>{stories.title}</h2>
            </a>
            <p> {stories.score} points</p>
            <p> by {stories.by}</p>
            <p> time {stories.time}</p>
            <p>comments {stories.kids && stories.kids.length > 0? stories.kids.length:0} </p>
          </div>
        ))} */} 
      </div>
    );
  }
}
