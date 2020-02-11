import axios from "axios";

export const api = axios.create({
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  timeout: 20000
});

api.interceptors.request.use(
  function(config) {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  function(response) {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

export const request = async req => {
  return api({
    url: `https://api-prod.onquidd.com/${req.baseUrl}/${req.route}`,
    data: req.payload || null,
    method: req.method
  });
};
