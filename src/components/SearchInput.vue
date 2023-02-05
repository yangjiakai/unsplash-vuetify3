<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { BASE_URL, config } from "../config/unsplashConfig";
import { useFocusWithin } from "@vueuse/core";
import { useUnsplashStore } from "../stores/unsplashStore";
import SearchPanel from "../components/SearchPanel.vue";
const loading = ref(false);
const searchPanelShow = ref(false);
const select = ref();
const search = ref("");
const selectList = ref<string[]>([]);
const selectResponse = ref();

const states = ref([
  "Alabama",
  "Alaska",
  "American Samoa",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "District of Columbia",
  "Federated States of Micronesia",
  "Florida",
  "Georgia",
  "Guam",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Marshall Islands",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Northern Mariana Islands",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Palau",
  "Pennsylvania",
  "Puerto Rico",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virgin Island",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
]);

const photoStatisticsUrl = computed(() => {
  return `${BASE_URL}topics/${search.value}`;
});

// 监听检索关键词变化，为空时相似关键词列表清空，且显示检索面板，否则显示关键词列表
watch(search, (val) => {
  if (val) {
    searchPanelShow.value = false;
    if (val !== select.value) {
      querySelections(val);
    } else {
      setTimeout(() => {
        selectList.value = [];
      }, 300);
    }
  } else {
    setTimeout(() => {
      selectList.value = [];
    }, 300);
    setTimeout(() => {
      searchPanelShow.value = true;
    }, 500);
  }
});

// 根据检索关键词过滤查询类似关键词列表
const querySelections = (key: string) => {
  loading.value = true;
  setTimeout(() => {
    selectList.value = states.value.filter(
      (item) => item.toLowerCase().indexOf(key) > -1
    );
  }, 300);
  loading.value = false;
};

// 检索面板显示条件：1.当前焦点在检索框或者检索面板上 2.检索框为空
const refSearchInput = ref();
const refSearchPanel = ref();
const searchInputFocus = useFocusWithin(refSearchInput);
const searchPanelFocus = useFocusWithin(refSearchPanel);

watch(
  [searchInputFocus.focused, searchPanelFocus.focused],
  ([searchInputFocued, searchPanelFocused]) => {
    console.log(searchInputFocued, searchPanelFocused);

    if ((searchInputFocued || searchPanelFocused) && !search.value) {
      searchPanelShow.value = true;
    } else {
      searchPanelShow.value = false;
    }
  }
);
</script>

<template>
  <v-card width="1000" class="search-container">
    <v-autocomplete
      color="info"
      elevation="1"
      ref="refSearchInput"
      class="main-search"
      v-model="select"
      v-model:search="search"
      :items="selectList"
      :loading="loading"
      density="comfortable"
      hide-details
      label="Keyword"
    >
      <template v-slot:no-data>
        <!-- <v-btn color="success">text</v-btn> -->
        <SearchPanel />
      </template>
    </v-autocomplete>

    <div ref="refSearchPanel" v-show="searchPanelShow" class="panel">
      <!-- <v-sheet style="border-radius: 5px" elevation="5" class="py-10 px-3">
        <div>
          <p class="my-2">
            Recent Searches
            <v-btn
              class="ml-2"
              variant="text"
              color="primary"
              @click="unsplashStore.clearRecentSearchList()"
              >Clear</v-btn
            >
          </p>
          <p v-if="unsplashStore.recentSearchList.length > 0">
            <v-btn
              class="mr-5"
              v-for="item in unsplashStore.recentSearchList"
              variant="outlined"
              >blue</v-btn
            >
          </p>
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
      </v-sheet> -->
    </div>
  </v-card>
</template>

<style scoped lang="scss"></style>
