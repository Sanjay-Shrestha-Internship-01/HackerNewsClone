import React, { Component } from "react";
import axios from "axios";
import CONSTANTS from "../Services/Hnapi";
const { baseUrl } = CONSTANTS;
export default class Newnews extends Component {
  constructor() {
    super();
  }

  state = {
    getStoryItem: [],
  };

  componentDidMount() {
    const promises = [];
    axios
      .get(`${baseUrl}/newstories.json`)
      .then((result) => {
        console.log(result.data);
        this.results = result.data.slice(0, 30);
        this.results.forEach((element) => {
          promises.push(
            axios
              .get(`${baseUrl}/item/${element}.json`)
              .then((data) => data.data)
          );
        });
        Promise.all(promises)
          .then((stories) => {
            this.setState({
              getStoryItem: stories.filter((s) => s),
            });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        this.err = err;
      });
  }

  render() {
    return (
      <div>
        {this.state.getStoryItem.map((stories) => (
          <div>
            <a href={stories.url}>
              {" "}
              <h2>{stories.title}</h2>
            </a>
            <p> {stories.score} points</p>
            <p> by {stories.by}</p>
            <p> time {stories.time}</p>
          </div>
        ))}
      </div>
    );
  }
}

