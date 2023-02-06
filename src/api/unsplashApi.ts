import { BASE_URL, config } from "@/config/unsplashConfig";

const topicsUrl = BASE_URL + "topics";
const photosUrl = BASE_URL + "photos";

// Photo
export const getPhotosApi = () => {
  const url = photosUrl + "?per_page=30";
  return axios.get(url, config);
};

export const getAPhotoApi = (id: string) => {
  const url = photosUrl + "/" + id;
  return axios.get(url, config);
};

export const getARandomPhotosApi = () => {
  const url = photosUrl + "/random";
  return axios.get(url, config);
};

export const getAPhotoStatisticsApi = (id: string) => {
  const url = photosUrl + "/" + id + "/statistics";
  return axios.get(url, config);
};

//  Topic
export const getTopicsApi = () => {
  return axios.get(topicsUrl, config);
};

export const getATopicApi = (id_or_slug: string | string[]) => {
  const url = topicsUrl + "/" + id_or_slug;
  return axios.get(url, config);
};

export const getTopicPhotosApi = (id_or_slug: string | string[]) => {
  const url = topicsUrl + "/" + id_or_slug + "/photos?per_page=30";
  return axios.get(url, config);
};
