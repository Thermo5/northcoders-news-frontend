import React, { Component } from 'react';
import '../App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from "./navbar.js"
import HomePage from "./homepage.js"
import TopicPage from "./topicPage.js";
import UserPage from "./userPage.js";
import UsersPage from "./usersPage.js";
import FourOFour from "./fourOFour.js";
import { fetchTopics } from "../api";
import CommentsList from "./commentsList.js";




class App extends Component {
  state = {
    loading: true,
    topics: [],
    error: null
  };
  componentDidMount() {
    return fetchTopics()
      .then(body => {
        this.setState({ topics: body.topics, loading: false }); 
      })
      .catch(error => {
        console.log(error)
        this.setState({ error, loading: false });
      });
  }
  render() {
    const { loading, topics, error } = this.state;
    if (loading) return "loading...";
    if (!loading && error) return error;

    return (
      <div className="App">
        <br/>
        <br/>
        <BrowserRouter>
          <div>
            <Navbar/>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/users' component={UsersPage} />
            <Route exact path='/user/:user_id' component={UserPage} />
            <Route exact path='/topics/:topic/articles' component={TopicPage} />
            <Route exact path='/articles/:article_id/comments' component={CommentsList} />
            <Route exact path='/*' component={FourOFour} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}


export default App;


