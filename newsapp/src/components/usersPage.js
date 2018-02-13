import React, { Component } from 'react';
import { fetchUsers } from "../api";
import { Link } from 'react-router-dom';

class UsersPage extends React.Component {
  state = {
    loading: true,
    users: []
  }


  componentDidMount() {
    fetchUsers().then(body => {
      this.setState({ users: body.users, loading: false });
    })
  }

  render() {
    const { users, loading } = this.state
    if (loading) { return "loading..." }

    return (
      <div className="section">
        {users.map((user, i) => {
          return (

          
          <div className="box" key={i}>
            <article className="media">
              <figure className="media-left">
                <p className="image is-64x64">
                  <img src={user.avatar_url} alt="avatar" />
                </p>
              </figure>
              <div className="media-content">
                <div className="content">
                  <p>
                      <Link to={`/user/${user.username}`} ><strong>{user.name}</strong></Link>
                    <br />
                    <small>@{user.username}</small>
                  </p>
                </div>
              </div>
            </article>
          </div>
          )
        })}
      </div>
    )
  }

}


export default UsersPage