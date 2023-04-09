import axios from "axios";
import md5 from "md5";

export const baseURL =  "http://gateway.marvel.com/v1/public"
export const ts = Number(new Date());

export const hash = md5(
  `${ts}${process.env.NEXT_PRIVATE_KEY}${process.env.NEXT_PUBLIC_KEY}`
).toString();

const api = axios.create({
  baseURL: "http://gateway.marvel.com/v1/public",
  params: {
    ts,
    apiKey: process.env.NEXT_PUBLIC_KEY,
    hash,
  },
});


export default api