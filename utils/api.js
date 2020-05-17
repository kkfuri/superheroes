import axios from "axios";

export default axios.create({
  baseURL: `https://superheroapi.com/api/${process.env.API_KEY}`,
});
