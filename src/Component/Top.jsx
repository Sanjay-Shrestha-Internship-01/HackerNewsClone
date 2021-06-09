import React, { Component } from "react";
import axios from "axios";
import CONSTANTS from "../Services/Hnapi";
const { baseUrl } = CONSTANTS;
export default class Top extends Component {
  constructor() {
    super();
  }
  state = {
    getTopItem: [],
  };

  componentDidMount() {
    const promises = [];
    axios
      .get(`${baseUrl}/topstories.json`)
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
              getTopItem: stories.filter((s) => s),
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
        {this.state.getTopItem.map((topStories) => (
          <div>
            <a href={topStories.url}>
              {" "}
              <h2>{topStories.title}</h2>
            </a>
            <p> {topStories.score} points</p>
            <p> by {topStories.by}</p>
            <p> time {topStories.time}</p>
          </div>
        ))}
      </div>
    );
  }
}

