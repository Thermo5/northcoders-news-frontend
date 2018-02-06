import React, { Component } from 'react';
import ArticleList from "./articleList";
import { fetchArticles, voteArticle, fetchComments, voteComment } from "../api";
import Voter from "./vote";


class CommentsList extends React.Component {
  state = {
    loading: true,
    comments: []
  }

  componentDidMount() {
    fetchComments().then(body => {
      this.setState({ comments: body, loading: false });
    });
  }

  voteUpOrDownOnComment = (commentId, vote) => {
    console.log(vote, 'vote')
    return voteComment(commentId, vote)
    console.log('2')
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
    const filteredComments = comments && comments.filter(comment => comment.belongs_to === articleId)
    return (
      <div>
        <h1>Comments</h1>
        {filteredComments.map((comment, i) =>  {
          const onDownVote = this.voteUpOrDownOnComment.bind(null, comment._id, 'down')
          const onUpVote = this.voteUpOrDownOnComment.bind(null, comment._id, 'down')
        return (<div key={i}>
            <div>
              <div className="box">
                <article className="media">
                  <div className="media-content">
                    <div className="content">
                      <p>{comment.created_by}</p>
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
