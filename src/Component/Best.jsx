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
        {this.state.getBestItem.map((best) => (
          <div>
            <a href={best.url}>
              {" "}
              <h2>{best.title}</h2>
            </a>
            <p>Score {best.score}</p>
            <p> by {best.by}</p>
            <p> time {best.time}</p>
          </div>
        ))}
      </div>
    );
  }
}

