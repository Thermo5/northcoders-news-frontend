import React, { Component } from 'react';
import AddComment from "./addComment";
import { fetchComments, voteComment, deleteComment } from "../api";
import Voter from "./vote";
import Moment from 'moment'



class CommentsList extends React.Component {
  state = {
    loading: true,
    comments: [],
    article: [],
    addComment: false
  }


  renderSubmittedComment = () => {
    this.componentDidMount()
  }

  componentDidMount() {
    const articleId = this.props.match.params.article_id
    fetchComments(articleId).then(body => {
      this.setState({ comments: body[0].comments, loading: false, article: body[1].article });
    });
  }

  voteUpOrDownOnComment = (commentId, vote) => {
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
          comments: newComments,
          submittedComment: false
        })
      })
  }

  handleDeleteComment = (event) => {
    const commentId = event.target.value
    return deleteComment(commentId)
      .then(() =>
        this.componentDidMount())
  }

  renderCommentField = () => this.setState({ addComment: true })


  unRenderCommentField = () => {
    setTimeout(() => {
      this.setState({ addComment: false })
    }, 200)
  }


  render() {
    const { comments, loading, addComment, article } = this.state;
    const articleId = this.props.match.params.article_id
    if (loading) return "loading...";
    return (
      <div className="section">
        <div className="box">
          <article className="media">
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{article.created_by}</strong>
                  <br />
                  <strong>{article.title}</strong>
                  <br />
                  {article.body}
                </p>
              </div>
            </div>
          </article>
        </div>
       
        {addComment ? <AddComment articleId={articleId} renderSubmittedComment={this.renderSubmittedComment} onChange={this.unRenderCommentField} /> : null}
        
        <div className="level">
          <h1 className="level-left">All {comments.length} comments</h1>
          <div className="level-right">
          {!addComment ? <a className="button is-link" onClick={this.renderCommentField}>Post Comment</a> : null}
          </div>
        </div>        
        {comments.sort((a, b) => b.created_at - a.created_at).map((comment, i) => {
          const onDownVote = this.voteUpOrDownOnComment.bind(null, comment._id, 'down')
          const onUpVote = this.voteUpOrDownOnComment.bind(null, comment._id, 'up')

          return (<div key={i}>
            <div>
              <div className="box">
                <article>
                  <div className="media-content">
                    <div className="message-header">
                      <p>{comment.created_by}</p>
                      <p>{Moment(comment.created_at).fromNow()}</p>
                      {comment.created_by === "northcoder" ? <button className="delete" value={comment._id} onClick={this.handleDeleteComment}></button> : ""}
                    </div>
                    <div className="content">
                      <p>{comment.body}</p>
                    </div>
                    <nav className="level is-mobile">
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
