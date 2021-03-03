import axios from "axios";

// Create an instance of axios client and set
// customized default properties.
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    // React recognizes only env variables
    // starting with REACT_APP_
    Authorization: `Client-ID ${process.env.REACT_APP_ACCESS_KEY}`,
  },
});
