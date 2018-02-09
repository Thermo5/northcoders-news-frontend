import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {postComment} from "../api"




class AddComment extends React.Component {
  state = {
    articleId: null,
    comment: ''
  }


  componentDidMount() {
    const { articleId } = this.props;
    this.setState({ articleId: articleId})
  }

  
  handleChange = (event) => {
    this.setState({ comment: event.target.value });
  }

  handleSubmit = (event)=> {
    event.preventDefault();
    const {articleId, comment } = this.state
    return postComment(articleId, comment).then(console.log)
  }


render () {
  const { comment } = this.state
  return (
    <div>
      
      <form onSubmit={this.handleSubmit}>
        <textarea className="textarea" name="commentText" placeholder="Add comments" value={comment} onChange={this.handleChange} ></textarea>
        <button className="button is-success button is-rounded" type="submit">Submit</button>
      </form>

    </div>
  )
}

}

export default AddComment