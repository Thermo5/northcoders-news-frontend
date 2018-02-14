import React from "react";
import { Link } from 'react-router-dom';
import Voter from "./vote";



const ArticleList = ({ articles, voteUpOrDownOnArticle}) => (
  <div>

    <div>
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
                      <Link to={`/user/${article.created_by}`} ><strong>{article.created_by}</strong></Link>
                      <br />
                      <strong>{article.title}</strong>
                      <br />
                      {article.body}
                    </p>
                  </div>
                  <div className="article-foot">
                    <nav className="level is-mobile">
                      <Voter votes={article.votes}
                      onDownVote={onDownVote}
                      onUpVote={onUpVote}
                      />
                      <Link to={`/articles/${article._id}/comments`}><span className="comment-text">Comments <i className="far fa-comment"></i></span></Link>
                      <Link to={`/topics/${article.belongs_to}/articles`}><small>{article.belongs_to}</small></Link>
                    </nav>            
                  </div>
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