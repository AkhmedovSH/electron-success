import axios from 'axios';
import { showLoader, hideLoader } from '../store/actions/loader';
import { store } from '../store';

const mainUrl = 'http://localhost:5000'

const axiosInstance = axios.create({
  baseURL: mainUrl,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
    //"Authorization": localStorage.getItem("token") ? "Bearer " + localStorage.getItem("token") : "",
    //"Accept-Language": localStorage.getItem("lang"),
    //"Language": localStorage.getItem("lang")
  }
});

// const axiosFile = axios.create({
//   baseURL: mainUrl,
//   headers: {"Content-Type": "multipart/form-data","Accept": "application/json"}
// });

// function getPath(payload, url) {
// 	let iterations = Object.entries(payload).length;
// 	var pathArr = "?";
// 	if(url !== undefined)
// 		url.includes("?") ? pathArr = '&' : pathArr = '?'
 
//   for (let key in payload) {
//     if (!--iterations) {
//       pathArr += key + "=" + payload[key];
//     } else {
//       pathArr += key + "=" + payload[key] + "&";
//     }
//   }
//   return pathArr;
// }

export function GET(url) {
  return new Promise((resolve, reject) => {
		store.dispatch(showLoader());
    axiosInstance.get(url)
			.then(response => {
        resolve(response.data);
      }).catch(error => {
				reject(error);
      }).finally(() => {
				store.dispatch(hideLoader());
			});
  });
}

export function POST(url, data) {
  return new Promise((resolve, reject) => {
		store.dispatch(showLoader());
    axiosInstance.post(url, data)
			.then(response => {
        resolve(response.data);
      }).catch(error => {
				reject(error);
      }).finally(() => {
				store.dispatch(hideLoader());
			});
  });
}