import { createClient } from "pexels";
import { getRandomNum } from "./getRandomNum";

const apikey = import.meta.env.VITE_PEXELS_API_KEY;
const client = createClient(apikey);

const getNewBgPhoto = async () => {
  const data = await getCuratedPhotos({ pageNum: 1, perPage: 5 });
  const photo = data[getRandomNum(5)];
  const { src, alt, photographer_url, photographer } = photo;
  return { src: src.landscape, alt, photographer_url, photographer };
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

export { getCategoryPhotos, getCuratedPhotos, getNewBgPhoto };
