<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { BASE_URL, config } from "../config/unsplashConfig";
import SearchPanel from "./SearchPanel.vue";

const loading = ref(false);
const detailShow = ref(false);
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

watch(search, (val) => {
  if (val) {
    detailShow.value = false;
    if (val !== select.value) {
      querySelections(val);
    }
  } else {
    detailShow.value = true;
    selectList.value = [];
  }
});

const querySelections = (key: string) => {
  loading.value = true;
  setTimeout(() => {
    selectList.value = states.value.filter(
      (item) => item.toLowerCase().indexOf(key) > -1
    );
  }, 500);
  loading.value = false;
};

const env = () => {
  if (!search.value) {
    detailShow.value = true;
  }
};
</script>

<template>
  <v-toolbar color="primary" class="main-toobar px-2">
    <v-card width="1000" class="search-container">
      <v-autocomplete
        class="main-search"
        @focus="env"
        @blur="detailShow = false"
        v-model="select"
        v-model:search="search"
        :items="selectList"
        :loading="loading"
        density="comfortable"
        hide-no-data
        hide-details
        label="Keyword"
      >
      </v-autocomplete>

      <div v-show="detailShow" class="panel">
        <SearchPanel />
      </div>
    </v-card>
  </v-toolbar>
</template>

<style scoped lang="scss">
.main-toobar {
  overflow: visible;
}

.search-container {
  position: relative;
  overflow: visible;

  .panel {
    position: absolute;
    width: 1000px;
  }
}
</style>
