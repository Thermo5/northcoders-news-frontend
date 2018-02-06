import React from "react";
import { Link } from "react-router-dom";


const NavFoot = ({topics}) => {
  
  return (

      <div className="hero-foot">
        <nav className="tabs">
          <div className="container">
           <ul>
            <Link to={`/`}>Home</Link>
            <Link to={`/topics/football/articles`}>Football</Link>
            <Link to={`/topics/coding/articles`}>Coding</Link>
            <Link to={`/topics/Cooking/articles`}>Cooking</Link>
              {/* {
                topics.map(topic => (
                  <li key={topic.slug}>
                    <Link to={`/topics/${topic.slug}/articles`}>{topic.name}</Link>
                  </li>
                ))} //This map was failing to render using Bulma????///*/}
           </ul>
          </div>
        </nav>
      </div>
  )
}


export default NavFoot