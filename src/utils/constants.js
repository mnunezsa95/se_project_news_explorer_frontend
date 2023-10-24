export const BASE_URL = "https://newsapi.org/v2/everything?";
export const apiKey = "4bfe57c6a85a467cbe63a01fcc5e32fc";
export const lang = navigator.language.split("-");

function getcurrentDate() {
  const date = new Date();
  const year = date.toLocaleString("default", { year: "numeric" });
  const month = date.toLocaleString("default", { month: "2-digit" });
  const day = date.toLocaleString("default", { day: "2-digit" });
  const formattedDate = year + "-" + month + "-" + day;
  return formattedDate;
}

export const currentDate = getcurrentDate();

function getLastWeekDate() {
  const time = new Date().getTime() - 604800000; // 604800000 = 1 weeek
  const previousWeek = new Date(time);
  const year = previousWeek.toLocaleString("default", { year: "numeric" });
  const month = previousWeek.toLocaleString("default", { month: "2-digit" });
  const day = previousWeek.toLocaleString("default", { day: "2-digit" });
  const formattedDate = year + "-" + month + "-" + day;
  return formattedDate;
}

export const previousWeek = getLastWeekDate();

export const checkServerResponse = (res) => {
  if (!res.ok) return Promise.reject(`An error with the Status Code ${res.status} has occurred`);
  return res.json();
};

export const formatSearchResDate = (date) => {
  return new Date(date).toLocaleString("default", { year: "numeric", month: "long", day: "numeric" });
};
