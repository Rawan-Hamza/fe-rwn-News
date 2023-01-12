import axios from "axios";

const fromApi = axios.create({
  baseURL: "https://rwn-news.onrender.com/api",
});

export const fetchArticles = () => {
  return fromApi.get(`/articles`).then((res) => {
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
