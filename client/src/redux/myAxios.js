import Axios from "axios";

const myAxios = Axios.create({
  baseURL: "api/post",
});

export default myAxios;
