import React, { Component } from 'react';
import ArticleList from "./articleList";
import { fetchArticles, voteArticle } from "../api";

class TopicPage extends React.Component {
  state = {
    loading: true,
    articles: []
  }
  
  componentDidMount() {
    console.log(this.props, 'topic')
    const { topic } = this.props.match.params;
    this.fetchArticlesByTopic(topic);
  }
  componentWillReceiveProps(newProps) {
    const oldTopic = this.props.match.params.topic
    const newTopic = newProps.match.params.topic

    if (oldTopic !== newTopic) {
      this.fetchArticlesByTopic(newTopic)
    }
  }
  fetchArticlesByTopic(topic) {
    this.setState({ loading: true })
    fetchArticles(topic).then(body => {
      this.setState({
        articles: body.articles,
        loading: false
      })
    })
  }

  voteUpOrDownOnArticle = (articleId, vote) => {
    return voteArticle(articleId, vote)
      .then(body => {
        const newArticle = body;
        const newArticles = this.state.articles.map(article => {
          if (article._id === newArticle._id) {
            return newArticle
          }
          return article;
        })
        this.setState({
          articles: newArticles
        })
      })
  }

  render() {
    const { topic } = this.props.match.params;
    const { articles, loading } = this.state;
    return (
      <div>
        <h2>Articles on {topic}</h2>
        {
          loading ?
            'loading...' :
            <ArticleList articles={articles} voteUpOrDownOnArticle={(this.voteUpOrDownOnArticle)}/>
        }
      </div>
    );
  }
}

export default TopicPage;
