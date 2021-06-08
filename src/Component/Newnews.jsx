import React, { Component } from "react";
import axios from "axios";
// import { getStoryIds, getStoryitem } from "../Services/Hnapi";
import CONSTANTS from "../Services/Hnapi";
const { baseUrl } = CONSTANTS;
export default class Newnews extends Component {
  constructor() {
    super();
  }

  state = {
    getStoryIds: [],
    getStoryitem: [],
    storyIds: [],
    // https://hacker-news.firebaseio.com/v0/item/16619917.json
  };

  // componentDidMount() {
  //   getStoryIds().then((res) => {
  //     console.log(res.data);

  //     this.setState({id: res.data});
  //   });

  //   getStoryitem().then((res) => {
  //     console.log(res.data);

  //     this.setState({});
  //   });
  // }
  // componentDidMount() {
  //   const story =  axios.get(`${baseUrl}/newstories.json`).then((res) => {
  //     console.log(res.data);
  //     this.setState({storyIds: res.data});
  //     const storyTwo =  axios.get(`${baseUrl}/item/${res.data}.json`).then((sid) => {
  //       console.log(sid.data);
  //       this.setState({   });
  //     });
  //   });

  // }
  // const todos = [...this.state.todos];
  // todos.push({
  //   title,
  //   date,
  //   isCompleted: false,
  // });
  // this.setState({
  //   todos,

  // });
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
            .get(`${baseUrl}/item/` + element + ".json")
            .then((data) => data.data)
            );
          
        });
        Promise.all(promises)
          .then((stories) => {
            this.setState({
              getStoryitem: stories.filter((s) => s),
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
        <p>hello world</p>
        {this.state.getStoryitem.map((story) =>
          <h1>{story.title}</h1>
        )}
      </div>
    );
  }
}
