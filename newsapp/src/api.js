const { REACT_APP_API_URL: API_URL } = process.env;

export const fetchTopics = () => {
  console.log('topics')
  return fetch(`${API_URL}/topics`).then(res => res.json());
};

export const fetchComments = () => {
  return fetch(`${API_URL}/comments`).then(res => res.json());
};

export const fetchArticles = topic => {
  const url = topic
    ? `${API_URL}/topics/${topic}/articles`
    : `${API_URL}/articles`;

  return fetch(url).then(res => res.json());
};

export const voteArticle = (articleId, vote) => {
  return fetch(`${API_URL}/articles/${articleId}?vote=${vote}`, {
    method: 'PUT'
  }).then(res => res.json());
}

export const voteComment = (commentId, vote) => {
  console.log(commentId)
   fetch(`${API_URL}/comments/${commentId}?vote=${vote}`, { method: 'PUT' }).then(res => res.json())
  .then(res => console.log)
  .catch(console.log('error'))
}


// changeVotes = (article_id, vote) => {
//   fetch(`http://northcoders-news-api.herokuapp.com/api/articles/${article_id}?vote=${vote}`, { method: 'PUT' })
//     .then(resbuffer => resbuffer.json())
//     .then((res) => {
//       const newArticleArray = this.state.articles.map((article) => {
//         if (article._id === res._id) {
//           return res
//         } else {
//           return article
//         }
//       })
//       this.setState({
//         articles: newArticleArray
//       })
//     })
//     .catch(console.log)
// }
