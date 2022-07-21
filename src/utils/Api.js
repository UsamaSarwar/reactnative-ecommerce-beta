import axios from "axios";

const baseUrl = "http://192.168.10.3:8000/";

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
