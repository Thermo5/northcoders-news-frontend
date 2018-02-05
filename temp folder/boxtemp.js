<div className="box">
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64"><img src="https://bulma.io/images/placeholders/128x128.png" alt="Image"/></figure>
    </div>
      <div className="media-content">
        <div className="content">
        <p>
          <strong>{article.created_by}</strong>
          <br />
          <strong>{article.title}</strong>
          <br />
          {article.body}
          <br />
          <small>{article.belongs_to}</small>
          <small>{article.votes}</small>
        </p>
      </div>
          <nav className="level is-mobile">
            <div className="level-left">
              <a className="level-item">
                <span className="icon is-small"><i className="fas fa-reply"></i></span>
              </a>
              <a className="level-item">
                <span className="icon is-small"><i className="fas fa-retweet"></i></span>
              </a>
              <a className="level-item">
                <span className="icon is-small"><i className="fas fa-heart"></i></span>
              </a>
            </div>
          </nav>
        </div>
  </article>
    </div>