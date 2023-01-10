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
