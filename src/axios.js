import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-7d06c.cloudfunctions.net/api", //where we have the api (cloud function) URL.
});
//We use this link when we debug and we test.
//http://localhost:5001/clone-7d06c/us-central1/api
export default instance;
