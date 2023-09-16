import axios from "axios";

// TODO: API_URLの修正
const STROKE_API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getStrokesByID = async (id: number) => {
  // TODO: URLの修正
  const url = `${STROKE_API_URL}/${id}`;
  if (url === undefined) {
    return;
  }
  const res = await axios.get(url);
  if (res.status === 200) {
    return res.data;
  } else {
    console.log(`error: status code is ${res.status}`);
    return;
  }
};

// POST
// export const postStroke = async(data: any) => {
//   if (STROKE_API_URL === undefined) {
//     return;
//   }
//   const res = await axios.post(STROKE_API_URL, data);
//   if (res.status === 200) {
//     return res.data;
//   } else {
//     console.log(`error: status code is ${res.status}`);
//     return;
//   }
// }
