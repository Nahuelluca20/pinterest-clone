import axios from "axios";

export const TestingService = () => {
  return axios.get("http://localhost:3001/api/card");
};

export const GetCardById = (id) => {
  return axios.get(`http://localhost:3001/api/card/${id}`);
};
