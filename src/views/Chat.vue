<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
const drawer = ref(true);
const channels = ref(["general", "production", "qa", "staging", "random"]);
const user = ref({
  id: 12,
  name: "John Cena",
  avatar: "/images/avatars/avatar1.svg",
});
</script>

<template>
  <div style="height: 100%">
    <v-navigation-drawer
      v-model="drawer"
      elevation="1"
      class="rounded"
      width="240"
    >
      <div class="px-2 py-1">
        <div class="title font-weight-bold primary--text">Chat Template</div>
        <div class="overline">1.0.0</div>
      </div>
      <v-list dense>
        <v-subheader class="ml-1 overline">channel</v-subheader>
        <div class="mx-2 mb-2">
          <v-btn outlined block>
            <v-icon small left>mdi-plus</v-icon>
            addChannel
          </v-btn>
        </div>

        <!-- channels list -->
        <v-list-item
          v-for="channelItem in channels"
          :key="channelItem"
          :to="`chat/channel/${channelItem}`"
          exact
        >
          <v-list-item-content>
            <v-list-item-title># {{ channelItem }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- channel view -->
    <v-sheet height="100%" color="blue">
      <router-view :user="user" @toggle-menu="drawer = !drawer"></router-view>
    </v-sheet>
  </div>
</template>

<style scoped lang="scss"></style>
