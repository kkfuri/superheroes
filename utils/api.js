import axios from "axios";

export default axios.create({
  baseURL: `https://superheroapi.com/api.php/${process.env.API_KEY}`,
});
