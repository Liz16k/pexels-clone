import { createClient } from "pexels";
import { saveAs } from "file-saver";

const apikey = import.meta.env.VITE_PEXELS_API_KEY;
const client = createClient(apikey);

const loadBg = () => {
  const bgImage = document.getElementById("bgImage");
  const bgCaption = document.getElementById("bgCaption");
  getCuratedPhotos({ pageNum: 1, perPage: 5 })
    .then((photos) => photos[getRandomNum(5)])
    .then((photo) => {
      bgImage.setAttribute("src", photo.src.landscape);
      bgImage.setAttribute("alt", photo.alt);
      bgCaption.setAttribute("href", photo.photographer_url);
      bgCaption.textContent = photo.photographer;
    });
};

const getCuratedPhotos = async ({ pageNum = 1, perPage = 1 }) => {
  const response = await client.photos.curated({
    page: pageNum,
    per_page: perPage,
  });
  return response.photos;
};

const getCategoryPhotos = async ({
  query = "",
  pageNum = 1,
  perPage = 10,
  params = null,
}) => {
  const response = await client.photos.search({
    query,
    per_page: perPage,
    page: pageNum,
    orientation: params?.orientation,
    size: params?.size,
  });
  return { photos: response.photos, total: response.total_results };
};

function downloadImage(url, alt) {
  const filename = alt.split(" ").join("_");
  saveAs(url, filename);
}

function getRandomNum(range) {
  return Math.floor(Math.random() * range);
}

export { getCategoryPhotos, getCuratedPhotos, loadBg, downloadImage };
