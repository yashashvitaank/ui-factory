import axios from "axios";

export const ajax = async (requestObject = {}) => {
  try {
    const response = await axios(requestObject);
    return response.data;
  } catch (error) {
    console.log("API ERROR", error);
  }
};
