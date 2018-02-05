import React from 'react'

const Voter = ({ votes, onDownVote, onUpVote }) => (

    <div className="level-left">
      <a className="level-item">
        Vote!
        <strong>{votes}</strong>
        <span className="icon is-small"><i className="fa fa-arrow-up" aria-hidden="true" onClick={onDownVote}></i></span>
      </a>
      <a className="level-item">
        <span className="icon is-small"><i className="fa fa-arrow-down" aria-hidden="true" onClick={onUpVote}></i></span>
      </a>
    </div>

)

export default Voter


