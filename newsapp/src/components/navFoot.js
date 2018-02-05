import React from "react";
import { Link } from "react-router-dom";


const NavFoot = ({topics}) => {
  
  return (

      <div className="hero-foot">
        <nav className="tabs">
          <div className="container">
           <ul>
             <a href="">dffd</a>
              {
                topics.map(topic => (
                  <li key={topic.slug}>
                    <Link to={`/topics/${topic.slug}/articles`}>{topic.name}</Link>
                  </li>
                ))}
           </ul>
          </div>
        </nav>
      </div>
  )
}


export default NavFoot