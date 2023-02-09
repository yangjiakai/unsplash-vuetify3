import { defineStore } from "pinia";

export const useAiStore = defineStore({
  id: "ai",
  state: () => ({
    isSideBarShow: ref(false),
  }),

  persist: {
    enabled: true,
    strategies: [{ storage: localStorage, paths: [] }],
  },

  getters: {},
  actions: {},
});
