import React from "react";
import axios from "axios";
// axios.defaults.withCredentials = true;
// export default axios.create({
//   baseURL: `https://jsonplaceholder.typicode.com/posts`,
//   headers: {
//     "Content-type": "application/json"
//   }
// });

const api = {

  post: async (url, data,headers) => {
    return new Promise((resolve, reject) => {
      axios
        .post(url, data,headers)

        .then((response) => {
          resolve(response.data);
        })

        .catch((err) => {
          reject(err);
        });
    });
  },
  get: async (url, headers) => {
    return new Promise((resolve, reject) => {
      axios
        .get(url,headers)
        .then((response) => {
          resolve(response.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}


export default api;
