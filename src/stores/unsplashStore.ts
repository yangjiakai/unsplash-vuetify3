import { defineStore } from "pinia";
import type { Photo } from "../types/unsplashTypes";

export const useUnsplashStore = defineStore({
  id: "upsplash",
  state: () => ({
    favoriteList: ref<Photo[]>([]),
    recentSearchList: ref<string[]>(["car", "book", "popular", "omega"]),
    searchKey: ref(""),
    searchResult: ref(),
  }),

  persist: {
    enabled: true,
    strategies: [
      { storage: localStorage, paths: ["favoriteList", "searchResult"] },
    ],
  },

  getters: {},
  actions: {
    clearSearchKey() {
      this.searchKey = "";
    },

    addToFavorite(payload: Photo) {
      this.favoriteList.push(payload);
    },

    removeFromFavorite(payload: Photo) {
      this.favoriteList = this.favoriteList.filter(
        (item) => item.id !== payload.id
      );
    },

    clearRecentSearchList() {
      this.recentSearchList = [];
    },
  },
});
