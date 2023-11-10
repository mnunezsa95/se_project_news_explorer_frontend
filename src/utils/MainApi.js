import { BASE_URL, checkServerResponse } from "./constants";

const bookmarkArticle = (article, keyword) => {
  return fetch(`${BASE_URL}/articles/`, {
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

export { bookmarkArticle };
