import React, { Component } from 'react';
import '../App.css';
import { BrowserRouter, Route, NavLink, Link } from 'react-router-dom';
import Navbar from "./navbar.js"
import HomePage from "./homepage.js"
import TopicPage from "./topicPage.js";
import { fetchTopics } from "../api";
import NavFoot from "./navFoot.js";
import CommentsList from "./commentsList.js";




class App extends Component {
  state = {
    loading: true,
    topics: [],
    error: null
  };
  componentDidMount() {
    fetchTopics()
      .then(body => {
        this.setState({ topics: body.topics, loading: false });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  }
  render() {
    const { loading, topics, error } = this.state;
    if (loading) return "loading...";
    if (!loading && error) return error;

    return (
      <div className="App">
        <Navbar/>
        <BrowserRouter>
          <div>
            <section className="hero is-dark">
              <div className="hero-body">
                <div className="container">
                  <h1 className="title" style={{ textAlign: "left"  }}>NorthCoders News</h1>
                  <h2 className="subtitle" style={{ textAlign: "left" }}>News it is</h2>
                </div>
              </div>
              <div className="hero-foot">
                <NavFoot topics={topics}/>
              </div>
            </section>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/topics/:topic/articles' component={TopicPage} />
            <Route exact path='/articles/:article_id/comments' component={CommentsList} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}


export default App;


