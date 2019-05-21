import axios from "axios";

export const firebaseAxios = axios.create({
  baseURL: ""
});

//firebaseAxios.defaults.headers.common['']

export const AuthAxios = axios.create({
  baseURL: "https://www.googleapis.com/identitytoolkit/v3/relyingparty"
});

export const Axios = axios.create({
  baseURL: "https://my.api.mockaroo.com/"
});

// axios.post( '/select-files',
// formData,
// {
//   headers: {
//       'Content-Type': 'multipart/form-data'
//   }
// }
