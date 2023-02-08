import { BASE_URL, ACCESS_KEY } from "@/config/unsplashConfig";
axios.defaults.headers["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers["Authorization"] = "Client-ID" + " " + ACCESS_KEY;

const topicsUrl = BASE_URL + "topics";
const photosUrl = BASE_URL + "photos";

// Photo
export const getPhotosApi = () => {
  const url = photosUrl + "?per_page=30";
  return axios.get(url);
};

export const getAPhotoApi = (id: string) => {
  const url = photosUrl + "/" + id;
  return axios.get(url);
};

export const getARandomPhotosApi = () => {
  const url = photosUrl + "/random";
  return axios.get(url);
};

export const getAPhotoStatisticsApi = (id: string) => {
  const url = photosUrl + "/" + id + "/statistics";
  return axios.get(url);
};

//  Topic
export const getTopicsApi = () => {
  return axios.get(topicsUrl);
};

export const getATopicApi = (id_or_slug: string | string[]) => {
  const url = topicsUrl + "/" + id_or_slug;
  return axios.get(url);
};

export const getTopicPhotosApi = (id_or_slug: string | string[]) => {
  const url = topicsUrl + "/" + id_or_slug + "/photos?per_page=30";
  return axios.get(url);
};

// Get a user
export const getUserApi = (username: string) => {
  const url = BASE_URL + "users/" + username;
  return axios.get(url);
};
// Get a user’s portfolio
export const getUserPortfolioApi = (username: string) => {
  const url = BASE_URL + "users/" + username + "/portfolio";
  return axios.get(url);
};
// List a user’s photos
export const getUserPhotosApi = (username: string) => {
  const url = BASE_URL + "users/" + username + "/photos?per_page=30";
  return axios.get(url);
};
// List a user’s liked photos
export const getUserLikesApi = (username: string) => {
  const url = BASE_URL + "users/" + username + "/likes?per_page=30";
  return axios.get(url);
};
// List a user’s collections
export const getUserCollectionsApi = (username: string) => {
  const url = BASE_URL + "users/" + username + "/collections?per_page=30";
  return axios.get(url);
};
// Get a user’s statistics
export const getUserStatisticsApi = (username: string) => {
  const url = BASE_URL + "users/" + username + "/statistics?per_page=30";
  return axios.get(url);
};

// Collections 图集
// List collections 图集一览
export const getCollectionsApi = () => {
  return axios.get(BASE_URL + "collections");
};

// Get a collection 获取图集信息
export const getCollectionApi = (id: string) => {
  const url = BASE_URL + "collections/" + id;
  return axios.get(url);
};
// Get a collection’s photos 获取该图集下所有图片
export const getCollectionPhotosApi = (id: string) => {
  const url = BASE_URL + "collections/" + id + "/photos?per_page=30";
  return axios.get(url);
};
// List a collection’s related collections 获取该图集相关联图集
export const getCollectionRelatedApi = (id: string) => {
  const url = BASE_URL + "collections/" + id + "/related";
  return axios.get(url);
};
// Create a new collection 新增图集
// Update an existing collection 更新现存图集
// Delete a collection 删除某个图集
// Add a photo to a collection 添加图片到图集
// Remove a photo from a collection 从图集删除图片

// Search

// const searchConfig = {
//   headers: {
//     Authorization: "Client-ID" + ` ${ACCESS_KEY}`,
//   },
//   params: {
//     perPage: 30,
//     page: 1,
//   },
// };

interface SearchParams {
  query: string;
  per_page?: number;
  page?: number;
}

export const searchAllApi = (searchParams: SearchParams) => {
  return axios.get(BASE_URL + "search?", {
    params: searchParams,
  });
};

export const searchPhotosApi = (searchParams: SearchParams) => {
  return axios.get(BASE_URL + "search/photos?", {
    params: searchParams,
  });
};

export const searchCollectionsApi = (searchParams: SearchParams) => {
  return axios.get(BASE_URL + "search/collections?", {
    params: searchParams,
  });
};

export const searchUsersApi = (searchParams: SearchParams) => {
  return axios.get(BASE_URL + "search/users?", {
    params: searchParams,
  });
};
