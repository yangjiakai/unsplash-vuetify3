<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { BASE_URL } from "@/config/unsplashConfig";
import {
  getCollectionApi,
  getCollectionPhotosApi,
  getCollectionRelatedApi,
} from "@/api/unsplashApi";
const route = useRoute();
const isLoading = ref(false);

const initData = async () => {
  isLoading.value = true;
  const collectionResponse = await getCollectionApi(route.params.id);
  const collectionPhotosResponse = await getCollectionPhotosApi(
    route.params.id
  );
  const collectionSimilarResponse = await getCollectionRelatedApi(
    route.params.id
  );
  isLoading.value = false;
};

initData();
</script>

<template>
  <div class="">{{ route.params.id }}</div>
</template>

<style scoped lang="scss"></style>
