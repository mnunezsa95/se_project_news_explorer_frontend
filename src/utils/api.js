import { BASE_URL, currentDate, previousWeek, lang, apiKey, checkServerResponse } from "./constants.js";

export function getNewsArticles(userInput) {
  return fetch(`${BASE_URL}q=${userInput}&from=${previousWeek}&to=${currentDate}&language=${lang[0]}&sortBy=publishedAt&apiKey=${apiKey}`).then(
    checkServerResponse
  );
}
