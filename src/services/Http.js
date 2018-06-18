// @flow

import axios from "axios";
import { constants } from "../config/constants.js";

const getWeather = (city: string) =>
  axios.get(constants.baseUrl + "weather", {
    params: {
      appid: constants.apiKey,
      q: city,
    },
  });

export { getWeather };
