import axios from "axios";
import {rootUrl} from "../constants/url.constants";

const fetchProducts = (params) => {
  let url = `${rootUrl}/products`;
  if (params) {
    const requestParams = Object.keys(params)
      .map(key => `${key}=${params[key]}`)
      .join('&');

    url += `?${requestParams}`;
  }

  const requestOptions = {
    url,
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
    withCredentials: true,
  };

  return axios(requestOptions)
    .then(response =>  response.data)
    .catch(error => Promise.reject(error));
};

export const productServices = {
  fetchProducts,
};