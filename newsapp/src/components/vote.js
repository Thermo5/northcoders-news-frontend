import React from 'react'

const Voter = ({ votes, onDownVote, onUpVote }) => (

  <div className="level-left">
    <h2 className="vote-text">Vote {votes} </h2>
    <a>
      <div className="vote-space">
        <span className="icon is-small"> <i className="fa fa-arrow-up" aria-hidden="true" onClick={onUpVote}> </i> </span>
      </div>
    </a>
    <a>
      <span className="icon is-small"> <i className="fa fa-arrow-down" aria-hidden="true" onClick={onDownVote}> </i> </span>
    </a>
  </div>

)

export default Voter


