const { REACT_APP_API_URL: API_URL } = process.env;

export const fetchTopics = () => {
  return fetch(`${API_URL}/topics`).then(res => res.json());
};

export const fetchComments = (articleId) => {
  return fetch(`${API_URL}/articles/${articleId}/comments`).then(res => res.json());
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
  })
  .then(res => res.json());
}

export const voteComment = (commentId, vote) => {
  console.log(vote, '**')
   return fetch(`${API_URL}/comments/${commentId}?vote=${vote}`, {
     method: 'PUT'
    })
    .then(res => res.json())
}


export const postComment = (articleId, body) => {
  return fetch(`${API_URL}/articles/${articleId}/comments`, {
    method: 'POST',
    body: JSON.stringify({ body }),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
  .then(res => res.json())
}


export const deleteComment = (commentId) => {
  console.log(commentId)
  return fetch(`${API_URL}/comments/${commentId}`,{
    method: 'DELETE'
  })
  .then(res => console.log(res))
}


// export const fetchUser = (userId) => {
//   return fetch(`${API_URL}/users/${userId}`).then(res => res.json());
// };
 
export const fetchUser = (userId) => {
  return fetch(`${API_URL}/users/${userId}`).then(res => res.json());
};
 