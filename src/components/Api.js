import axios from "axios";

const fromApi = axios.create({
  baseURL: "https://rwn-news.onrender.com/api",
});

export const fetchArticles = (topic) => {
  return fromApi.get(`/articles` , {
    params: { topic }
  }).then((res) => {
    return res.data;
  });
};

export const fetchTopics = () => {
  return fromApi.get("/topics").then((res) => {
    return res.data;
  });
};

export const fetchArticleById = (article_id) => {
  return fromApi.get(`/articles/${article_id}`).then((res) => {
    return res.data;
  });
};

export const fetchComments = (article_id) => {
  return fromApi.get(`/articles/${article_id}/comments`).then((res) => {
    return res.data;
  });
};

export const patchArticlesById = (article_id, increment) => {
  return fromApi
    .patch(`/articles/${article_id}`, {
      inc_votes: increment,
    })
    .then((res) => {
      return res.data;
    });
};

export const postComment = ({ article_id, body, username = "grumpy19" }) => {
  const postBody = {
    article_id,
    username,
    body,
  };

  return fromApi
    .post(`/articles/${article_id}/comments`, postBody)
    .then(({ data }) => {
      return data.addedComment;
    })
    .catch((err) => {
      console.log(err);
    });
};
