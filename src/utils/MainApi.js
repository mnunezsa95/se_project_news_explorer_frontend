import { BASE_URL, checkServerResponse } from "./constants";

const saveArticle = (article) => {
  return fetch(`${BASE_URL}/articles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jsonwebtoken")}`,
    },
    body: JSON.stringify({
      keyword: article.keyword,
      title: article.title,
      text: article.description,
      date: article.publishedAt,
      source: article.source.name,
      link: article.url,
      image: article.urlToImage,
    }),
  }).then(checkServerResponse);
};

const getSavedArticles = () => {
  return fetch(`${BASE_URL}/articles`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jsonwebtoken")}`,
    },
  }).then(checkServerResponse);
};

const removeArticle = (articleId) => {
  return fetch(`${BASE_URL}/articles/${articleId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jsonwebtoken")}`,
    },
  }).then(checkServerResponse);
};

export { saveArticle, getSavedArticles, removeArticle };
