<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { BASE_URL } from "@/config/unsplashConfig";

const route = useRoute();

const collectionUrl = computed(() => {
  return BASE_URL + "collections/" + route.params.id;
});

const collectionPhotosUrl = computed(() => {
  return BASE_URL + "collections/" + route.params.id + "/photos";
});

const collectionSimilarUrl = computed(() => {
  return BASE_URL + "collections/" + route.params.id + "/similar";
});

const isLoading = ref(false);

const initData = async () => {
  isLoading.value = true;
  const collectionResponse = await axios.get(collectionUrl.value);
  const collectionPhotosResponse = await axios.get(collectionPhotosUrl.value);
  const collectionSimilarResponse = await axios.get(collectionSimilarUrl.value);
  isLoading.value = false;
};

initData();
</script>

<template>
  <div class="">{{ route.params.id }}</div>
</template>

<style scoped lang="scss"></style>
