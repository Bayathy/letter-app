import axios from "axios";

import { API_URL } from "./common";

import type { PointGroup } from "signature_pad";

const STROKE_API_URL = `${API_URL}/letter`;

export const getStrokesByID = async (uuid: number) => {
  const url = `${STROKE_API_URL}/${uuid}`;
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

export const postStroke = async(data: PointGroup[]) => {
  if (STROKE_API_URL === undefined) {
    return;
  }
  const res = await axios.post(STROKE_API_URL, data, {
    headers: {
      "Content-Type": 'application/json'
    }
  });
  if (res.status === 200) {
    return res.data;
  } else {
    console.log(`error: status code is ${res.status}`);
    return;
  }
}
