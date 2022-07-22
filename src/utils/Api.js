import axios from "axios";

const baseUrl = "http://172.15.2.71:8000/";

const api = async (endpoint, requestType, payload) => {
  try {
    const resp = await axios({
      method: requestType,
      url: baseUrl + endpoint,
      data: payload,
    });
    return resp.data;
  } catch (err) {
    console.log(err.message);
    console.log(err.response.header);
    return { error: true };
  }
};

export default api;
