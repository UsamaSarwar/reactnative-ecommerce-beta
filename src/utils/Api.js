import axios from "axios";
import { useDispatch } from "react-redux";
import { resetResponseData } from "../features/user";

const baseUrl = "http://192.168.10.3:8000/";

const api = async (endpoint, requestType, payload) => {
  try {
    const resp = await axios({
      method: requestType,
      url: baseUrl + endpoint,
      data: payload,
    });
    // console.log("Calling from api");
    // console.log(resp.data.body.products);
    return resp.data;
  } catch (err) {
    console.log(err.response.data);
    const title = err.response.data ? err.response.data.header.title : "Error";
    const message = err.response.data
      ? err.response.data.header.message
      : err.message;
    return { error: { title: title, message: message } };
  }
};

export default api;
