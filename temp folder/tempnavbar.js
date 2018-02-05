class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchArticles();
  }
  render() {
    const { articles, loading, error } = this.props;
    return (
      <div>
        <h2>HomePage</h2>
        {error && <Redirect to='/404' />}
        {loading || articles.length === 0 ? (
          <p>Loading...</p>
        ) : (
            <div>
              {articles.map(article => (
                <h3 key={article._id}>{article.title}</h3>
              ))}
            </div>
          )}
      </div>
    );
  }
}