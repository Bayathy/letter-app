import axios from "axios";

const API_URL= process.env.NEXT_PUBLIC_API_URL;

// test
export const getTestRequest = async() => {
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
}