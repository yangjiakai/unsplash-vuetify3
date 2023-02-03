<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { useUnsplashStore } from "../stores/unsplashStore";
const unsplashStore = useUnsplashStore();

// Trending Searches
const trendingSearches = ref(["car", "book", "popular", "omega"]);

// Trending Topics
const trendingTopics = ref(["Film", "WallPapers", "Health", "Spirit"]);

// Trending Collecitons
const trendingCollections = ref(["Yoga", "Season", "Luxury", "Universe"]);
</script>

<template>
  <v-sheet style="border-radius: 5px" elevation="5" class="py-10 px-3">
    <div v-if="unsplashStore.recentSearchList.length > 0">
      <p>
        Recent Searches
        <v-btn
          class="ml-2"
          variant="text"
          color="primary"
          @click="unsplashStore.clearRecentSearchList()"
          >Clear</v-btn
        >
      </p>
      <v-btn
        class="mr-5"
        v-for="item in unsplashStore.recentSearchList"
        variant="outlined"
        >blue</v-btn
      >
    </div>
    <div>
      <p class="my-5">Trending Searches</p>
      <p>
        <v-btn
          class="mr-5"
          v-for="item in trendingSearches"
          variant="outlined"
          >{{ item }}</v-btn
        >
      </p>
    </div>
    <div>
      <p class="my-5">Trending Topics</p>
      <p>
        <v-btn
          class="mr-5"
          v-for="item in trendingSearches"
          variant="outlined"
          >{{ item }}</v-btn
        >
      </p>
    </div>
    <div>
      <p class="my-5">Trending Collecitons</p>
      <p>
        <v-btn
          class="mr-5"
          v-for="item in trendingSearches"
          variant="outlined"
          >{{ item }}</v-btn
        >
      </p>
    </div>
  </v-sheet>
</template>

<style scoped lang="scss"></style>
