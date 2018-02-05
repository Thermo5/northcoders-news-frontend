import React from "react";
import { Link } from 'react-router-dom';
import Voter from "./vote";



const ArticleList = ({ articles, voteUpOrDownOnArticle}) => (

  <div className="section">

    <div className="container is-fluid">
     
        {articles && articles.map((article, i) => {
          const onDownVote = voteUpOrDownOnArticle.bind(null, article._id, 'down');
          const onUpVote = voteUpOrDownOnArticle.bind(null, article._id, 'up');
          return (
          <div key={i}>
            <div className="box">
              <article className="media">
                <div className="media-content">
                  <div className="content">
                    <p>
                      <strong>{article.created_by}</strong>
                      <br />
                        <Link to={`/articles/${article._id}/comments`} ><strong>{article.title}</strong></Link>
                      <br />
                      {article.body}
                      <br />
                      <Link to={`/topics/${article.belongs_to}/articles`}><small>{article.belongs_to}</small></Link>
                    </p>
                  </div>
                    <nav className="level is-mobile">
                    <Voter votes={article.votes}
                      onDownVote={onDownVote}
                      onUpVote={onUpVote}
                    />
                      <div className="media-right">Comments{article.comments}</div>
                    </nav>            
                </div>
              </article>
            </div>
          </div>
          )
        })}
  
    </div>
  </div>
)

export default ArticleList