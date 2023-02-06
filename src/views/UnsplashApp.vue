<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: Imitate Nitori App
-->
<script setup lang="ts">
import { getTopicsApi, getARandomPhotosApi } from "@/api/unsplashApi";
import type { Topic, Photo } from "@/types/unsplashTypes";
import { init } from "echarts/core";

const topics = ref<Topic[]>([]);
const banner = ref<Photo>();

const initData = async () => {
  const topicsResponse = await getTopicsApi();
  topics.value = topicsResponse.data;
  const bannerResponse = await getARandomPhotosApi();
  banner.value = bannerResponse.data;
};

initData();
</script>

<template>
  <div>
    <v-sheet class="pa-3">
      <template v-for="topic in topics" :key="topic.id">
        <v-hover v-slot="{ isHovering, props }">
          <v-chip
            v-bind="props"
            :elevation="isHovering ? 10 : 1"
            class="mr-2"
            pill
            link
          >
            <v-avatar start>
              <v-img cover :src="topic.cover_photo.urls.thumb"></v-img>
            </v-avatar>

            {{ topic.title }}
          </v-chip>
        </v-hover>
      </template>

      <!-- <RouterLink to="/" v-for="topic in topics" :key="topic.id">

      </RouterLink> -->
    </v-sheet>
    <v-parallax v-if="banner" height="800" :src="banner.urls.full" class="">
      <v-sheet
        color="rgba(100,100,100,.3)"
        class="d-flex flex-column fill-height justify-center align-center text-white"
      >
        <v-card width="800" elevation="0" color="transparent">
          <h1 class="text-h2 font-weight-black mb-4">Unsplash</h1>
          <h4 class="subheading">
            The internet’s source for visuals. Powered by creators everywhere.
          </h4>
        </v-card>
      </v-sheet>
    </v-parallax>
    <!-- <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view> -->
  </div>
</template>

<style scoped lang="scss"></style>
