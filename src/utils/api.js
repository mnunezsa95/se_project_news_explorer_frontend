import { BASE_URL, currentDate, previousWeek, apiKey, checkServerResponse } from "./constants";
console.log(apiKey);

export function getNewsArticles(userInput, previousWeek, currentDate, pageSize, apiKey) {
  fetch(`${BASE_URL}q=${userInput}&from=${previousWeek}&to=${currentDate}&sortBy=publishedAt&apiKey=${apiKey}`).then(checkServerResponse);
}
