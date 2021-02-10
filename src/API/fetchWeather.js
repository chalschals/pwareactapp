import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const KEY = "f48b6ebe5b12e1c722d69f5de107d4dd";
export const fetchWeather = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: "metric",
      APPID: KEY,
    },
  });
  return data;
};
