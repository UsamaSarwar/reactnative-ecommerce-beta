import axios from "axios";
import Constants from "expo-constants";

const baseUrl = Constants.manifest.extra.baseUrl;

const api = async (endpoint, requestType, payload) => {
  // console.log(Constants.manifest);
  // console.log(baseUrl);
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
    const title = err.response.data ? err.response.data.header.title : "Error";
    const message = err.response.data
      ? err.response.data.header.message
      : err.message;
    return { error: { title: title, message: message } };
  }
};

export default api;
