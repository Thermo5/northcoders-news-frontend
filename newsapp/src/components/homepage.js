import React from "react";
import { Link } from 'react-router-dom';
import ArticleList from './articleList'
import { fetchArticles, voteArticle } from "../api";


class HomePage extends React.Component {
  state = {
    articles: [],
    loading: true,
  }

  componentDidMount() {
    fetchArticles().then(body => {
      this.setState({ articles: body.articles, loading: false });
    });
  }
  
  voteUpOrDownOnArticle = (articleId, vote) => {
    return voteArticle(articleId, vote)
      .then(body => {
        const newArticle  = body;
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
    const { articles, loading } = this.state;
    return (
      <div className="section">
        <ArticleList voteUpOrDownOnArticle={(this.voteUpOrDownOnArticle)} />
        </div>
    );
  }
}



export default HomePage