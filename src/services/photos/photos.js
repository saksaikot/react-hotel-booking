const volcanoImages = [
  "alain-bonnardeaux-tLxGw_ITs7k-unsplash.jpg",
  "hamzah-hanafi-RJvJI1gTE7o-unsplash.jpg",
  "marc-szeglat-I1MGVZ42wnU-unsplash.jpg",
  "tanya-grypachevskaya-80x3QULJDN4-unsplash.jpg",
  "toby-elliott-Nqdx6-LW4VE-unsplash.jpg",
  "toby-elliott-TbEqd-GNC5w-unsplash.jpg",
  "usgs-WQ5HOvrDZ6Y-unsplash.jpg",
  "vadim-sadovski-AH7oKSGbvYE-unsplash.jpg",
  "yosh-ginsu-qexZLgMcbPc-unsplash.jpg",
  "yulia-gadalina-oa8vRa1JBlw-unsplash.jpg",
];
const winterImages = [
  "alberto-restifo-cFplR9ZGnAk-unsplash.jpg",
  "andrew-ridley-8jUpX_L9rsk-unsplash.jpg",
  "andrey-bond-S_O16COE6gU-unsplash.jpg",
  "fabrice-villard-7__6lSyuYeA-unsplash.jpg",
  "gabriel-alenius-USXfF_ONUGo-unsplash.jpg",
  "ian-keefe-OgcJIKRnRC8-unsplash.jpg",
  "john-price-UdgvzNom0Xs-unsplash.jpg",
  "jonathan-knepper-9GMO0Sxyw_Y-unsplash.jpg",
  "roberto-nickson-5PQn41LFsQk-unsplash.jpg",
];

const IMAGE_CATEGORY = [
  { name: "winter", images: winterImages },
  { name: "volcano", images: volcanoImages },
];

const getAllUrl = () => {
  const imagesUrl = { category: [], images: [] };
  IMAGE_CATEGORY.forEach((category) => {
    // console.log(category.name);
    imagesUrl.category.push({ name: category.name });
    category.images.forEach((image, index) => {
      imagesUrl.images.push({
        preview: imagePath("/preview/", category.name, image),
        large: imagePath("/large/", category.name, image),
        category: category.name,
      });
    });
  });

  return imagesUrl;
};

function imagePath(type, name, imageName) {
  const PATH = "images/nature-images-unplash/";
  return PATH + name + type + imageName;
}
export default getAllUrl();
