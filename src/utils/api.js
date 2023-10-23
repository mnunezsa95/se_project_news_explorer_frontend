import { BASE_URL, currentDate, previousWeek, apiKey, checkServerResponse } from "./constants.js";

export function getNewsArticles(userInput = "nature") {
  fetch(`${BASE_URL}q=${userInput}&from=${previousWeek}&to=${currentDate}&sortBy=publishedAt&apiKey=${apiKey}`).then(checkServerResponse);
}

getNewsArticles();
