import React, { Component } from 'react';
import ArticleList from "./articleList";
import AddComment from "./addComment";
import { fetchArticles, voteArticle, fetchComments, voteComment } from "../api";
import Voter from "./vote";


class CommentsList extends React.Component {
  state = {
    loading: true,
    comments: []
  }

  componentDidMount() {
    const articleId = this.props.match.params.article_id
    fetchComments(articleId).then(body => {
      this.setState({ comments: body.comments, loading: false });
    });
  }

  voteUpOrDownOnComment = (commentId, vote) => {
    console.log(vote, 'vote')
    return voteComment(commentId, vote)
      .then(body => {
        const newComment = body;
        const newComments = this.state.comments.map(comment => {
          if (comment._id === newComment._id) {
            return newComment
          }
          return comment;
        })
        this.setState({
          comments: newComments
        })
      })
  }



  render () {
    const { comments, loading } = this.state;
    const articleId = this.props.match.params.article_id
    if (loading) return "loading...";
    return (
      <div className="section">
        <h1>Comments</h1>
        <AddComment articleId={articleId}/>
        <br/>
        <br/>
        {comments.map((comment, i) =>  {
          const onDownVote = this.voteUpOrDownOnComment.bind(null, comment._id, 'down')
          const onUpVote = this.voteUpOrDownOnComment.bind(null, comment._id, 'down')
        return (<div key={i}>
            <div>
              <div className="box">
              <article>
                  <div className="media-content">
                  <div className="message-header">
                      <p>{comment.created_by}</p>
                    <button className="delete"></button>
                    </div>
                    <div className="content">
                      <p>{comment.body}</p> 
                    </div>
                    <nav className="level is-mobile">
                      <p>{comment.votes}</p>
                      <Voter votes={comment.votes}
                      onDownVote={onDownVote}
                      onUpVote={onUpVote}
                      />
                    </nav>    
                  </div>
                </article>
              </div>
            </div>
        </div>)
         })}
     </div>
    )
  }
}

export default CommentsList;
