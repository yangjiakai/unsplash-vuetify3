import { defineStore } from "pinia";
import type { Photo } from "../types/unsplashTypes";

export const useUnsplashStore = defineStore({
  id: "upsplash",
  state: () => ({
    favoriteList: ref<Photo[]>([]),
    recentSearchList: ref<string[]>(["car", "book", "popular", "omega"]),
  }),

  persist: {
    enabled: true,
    strategies: [{ storage: localStorage, paths: ["favoriteList"] }],
  },

  getters: {},
  actions: {
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
