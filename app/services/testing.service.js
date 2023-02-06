import axios from "axios";

export const TestingService = () => {
  return axios.get("http://localhost:3001/api/card");
};

export const GetCardById = (id) => {
  return axios.get(`http://localhost:3001/api/card/${id}`);
};

export const PostPin = (img, title) => {
  return axios.post(`http://localhost:3001/api/card`, {
    img: img,
    link: "https://www.tumblr.com/aes-tivate",
    title: title,
    userName: "@pepeGrillo",
    userImg:
      "https://disneynews.us/wp-content/uploads/2019/11/Jiminy-Cricket-Pinocchio-disney-289x300.jpg",
  });
};
