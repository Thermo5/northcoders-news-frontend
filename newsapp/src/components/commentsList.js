import React, { Component } from 'react';
import ArticleList from "./articleList";
import AddComment from "./addComment";
import { fetchArticles, voteArticle, fetchComments, voteComment, deleteComment } from "../api";
import Voter from "./vote";
import Moment from 'moment'



class CommentsList extends React.Component {
  state = {
    loading: true,
    comments: []
  }


  renderSubmittedComment = () => {
    this.componentDidMount()
}

  componentDidMount() {
    const articleId = this.props.match.params.article_id
    fetchComments(articleId).then(body => {
      this.setState({ comments: body.comments, loading: false });
    });
  }

  voteUpOrDownOnComment = (commentId, vote) => {
    console.log(commentId)
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


  render () {
    const { comments, loading } = this.state;
    const articleId = this.props.match.params.article_id
    if (loading) return "loading...";
    return (
      <div className="section">
        <h1>Comments</h1>
        <AddComment articleId={articleId} renderSubmittedComment={this.renderSubmittedComment}/>
        <br/>
        <br/>
      
        {comments.sort((a, b) =>  b.created_at - a.created_at ).map((comment, i) =>  {
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
                    {comment.created_by === "northcoder" ? <button className="delete" value={comment._id} onClick={this.handleDeleteComment}></button> : "" }
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
