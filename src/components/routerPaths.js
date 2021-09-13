// const root =
//   !process.env.NODE_ENV || process.env.NODE_ENV === "development"
//     ? "/bohubrihi-assignments/2-react-js/2.1-photo-gallery/photo-gallery/"
//     : "/";
const root = "/";
const routePaths = {
  home: root,
  signup: root + "signup",
  login: root + "login",
  resetPassword: root + "reset-password",
  gallery: root + "gallery",
  room: root + "room",
};

export default routePaths;
