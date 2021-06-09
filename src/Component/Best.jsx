import React, {Component} from "react";
import axios from "axios";
import CONSTANTS from "../Services/Hnapi";
const { baseUrl } = CONSTANTS;
export default class Best extends Component {
  constructor() {
    super();
  }
  state = {
    getBestItem: [],
  };

  componentDidMount() {
    const promises = [];
    axios
      .get(`${baseUrl}/beststories.json`)
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
              getBestItem: stories.filter((s) => s),
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
        {this.state.getBestItem.map((bestStories) => (
          <div>
            <a href={bestStories.url}>
              {" "}
              <h2>{bestStories.title}</h2>
            </a>
            <p> {bestStories.score} points</p>
            <p> by {bestStories.by}</p>
            <p> time {bestStories.time}</p>
            <p>comments {bestStories.kids && bestStories.kids.length > 0? bestStories.kids.length:0} </p>
          </div>
        ))}
      </div>
    );
  }
}

