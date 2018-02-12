import React, { Component } from 'react';
import { fetchUser } from "../api";

class UserPage extends React.Component {
  state = {
    loading: true,
    user: []
  }


  componentDidMount () {
    const {user_id} = this.props.match.params
    fetchUser(user_id).then(body => {
      this.setState({ user: body.users, loading: false });
  })
}

render () {
  const {user, loading} =this.state
  if (loading) return "loading...";
  return (
      <div className="user section">
      <article className="media">
        <figure className="media-left">
          <p className="image is-64x64">
            <img src={user.avatar_url}/>
          </p>
        </figure>
        <div className="media-content">
          <div className="content">
              <p>
                <strong>{user.name}</strong>    <small>@{user.username}</small> 
                <br/>
              </p>
            </div>
       
            </div>
      
</article>
      </div>
  )
}




}


export default UserPage