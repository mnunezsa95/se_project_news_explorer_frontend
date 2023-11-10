import { BASE_URL, checkServerResponse } from "./constants";

const saveArticle = (article, keyword) => {
  return fetch(`${BASE_URL}/articles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jsonwebtoken")}`,
    },
    body: JSON.stringify({
      keyword: keyword,
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

const removeSavedArticle = (selectedArticle) => {
  return fetch(`${BASE_URL}/articles/${selectedArticle}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jsonwebtoken")}`,
    },
  }).then(checkServerResponse);
};

export { saveArticle, getSavedArticles, removeSavedArticle };
