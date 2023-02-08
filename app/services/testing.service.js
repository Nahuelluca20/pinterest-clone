import axios from "axios";

export const TestingService = () => {
  return axios.get("https://pinterest-clone-api.vercel.app/api/card");
};

export const GetCardById = (id) => {
  return axios.get(`https://pinterest-clone-api.vercel.app/api/card/${id}`);
};

export const AddCommentService = (id, comment) => {
  return axios.patch(`https://pinterest-clone-api.vercel.app/api/card/${id}`, {
    comments: comment,
  });
};

export const PostPin = (img, title) => {
  return axios.post(`https://pinterest-clone-api.vercel.app/api/card`, {
    img: img,
    link: "https://www.tumblr.com/aes-tivate",
    title: title,
    userName: "@pepeGrillo",
    userImg:
      "https://disneynews.us/wp-content/uploads/2019/11/Jiminy-Cricket-Pinocchio-disney-289x300.jpg",
    comments: [],
  });
};
