<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { useUnsplashStore } from "../stores/unsplashStore";
const unsplashStore = useUnsplashStore();
// 检索面板内容

// Trending Searches
const trendingSearches = ref(["car", "book", "popular", "omega"]);

// Trending Topics
const trendingTopics = ref(["Film", "WallPapers", "Health", "Spirit"]);

// Trending Collecitons
const trendingCollections = ref(["Yoga", "Season", "Luxury", "Universe"]);
</script>

<template>
  <v-sheet class="px-4 py-2">
    <div v-if="unsplashStore.recentSearchList.length > 0">
      <p>
        <span class="text-overline text-grey"> Recent Searches</span>
        <v-btn
          size="small"
          class="ml-2"
          variant="text"
          color="primary"
          @click="unsplashStore.clearRecentSearchList()"
          >Clear</v-btn
        >
      </p>
      <p>
        <v-btn
          size="small"
          class="mr-5"
          v-for="item in unsplashStore.recentSearchList"
          variant="outlined"
          >blue</v-btn
        >
      </p>
    </div>
    <div>
      <span class="text-overline text-grey"> Trending Searches</span>
      <p>
        <v-btn
          size="small"
          class="mr-5"
          v-for="item in trendingSearches"
          variant="outlined"
          >{{ item }}</v-btn
        >
      </p>
    </div>
    <div>
      <span class="text-overline text-grey"> Trending Topics</span>
      <p>
        <v-btn
          size="small"
          class="mr-5"
          v-for="item in trendingSearches"
          variant="outlined"
          >{{ item }}</v-btn
        >
      </p>
    </div>
    <div>
      <span class="text-overline text-grey"> Trending Collecitons</span>
      <p>
        <v-btn
          size="small"
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
