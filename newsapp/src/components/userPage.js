import React, { Component } from 'react';
import { fetchUser } from "../api";

class UserPage extends React.Component {
  state = {
    loading: true,
    user: [],
    articles: []
  }


  componentDidMount() {
    const { user_id } = this.props.match.params
    fetchUser(user_id).then(body => {
      this.setState({ user: body[0].users, loading: false, articles: body[1].articles });
    })
  }

  render() {
    const { user, loading, articles } = this.state
    if (loading) return "loading...";
    return (
      <div className="section">
        <div className="box">
          <article className="media">
            <figure className="media-left">
              <p className="image is-64x64">
                <img src={user.avatar_url} alt="avatar" />
              </p>
            </figure>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{user.name}</strong>
                  <br />
                  <small>@{user.username}</small>
                </p>
              </div>
            </div>
          </article>
        </div>
        <h2 className="user-article-num">All {articles.length} articles by {user.name}</h2>
        {articles.map((article, i) => {
          return (
            <div key={i}>
              <div className="box">
                <article className="media">
                  <div className="media-content">
                    <div className="content">
                      <p className="user-article-title">{article.title}</p>
                      <p>{article.body}</p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          )
        })}

        dfsdfs
      </div>
    )
  }




}


export default UserPage