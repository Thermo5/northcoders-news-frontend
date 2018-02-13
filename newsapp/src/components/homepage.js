import React from "react";
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
    //console.log(articles)
    return (
      <div>
        {loading || articles.length === 0 ? (
          <p>Loading...</p>
        ) : (
      <div className="section">
        <ArticleList articles={articles} voteUpOrDownOnArticle={(this.voteUpOrDownOnArticle)} />
        </div>
          )}
      </div>
    );
  }
}



export default HomePage