import axios from "axios";

export const API_URL = "https://m97ndvdju9.execute-api.ap-northeast-1.amazonaws.com";

export const getTestRequest = async () => {
  if (API_URL === undefined) {
    return;
  }
  const res = await axios.get(API_URL);
  if (res.status === 200) {
    return res.data;
  } else {
    console.log(`error: status code is ${res.status}`);
    return;
  }
};
