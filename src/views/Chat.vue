<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { useAiStore } from "@/stores/aiStore";
const aiStore = useAiStore();
const channels = ref([
  {
    id: 1,
    title: "问答",
    icon: "mdi-forum",
    url: "",
    active: true,
  },
  {
    id: 2,
    title: "语法纠正",
    icon: "mdi-text-box-check-outline",
    url: "",
    active: false,
  },
  {
    id: 3,
    title: "翻译",
    icon: "mdi-translate",
    url: "",
    active: false,
  },
  {
    id: 4,
    title: "解释代码",
    icon: "mdi-code-less-than-or-equal",
    url: "",
    active: false,
  },
  {
    id: 5,
    title: "SQL查询",
    icon: "mdi-database-search",
    url: "",
    active: false,
  },
]);
const user = ref({
  id: 12,
  name: "John Cena",
  avatar: "/images/avatars/avatar1.svg",
});
</script>

<template>
  <div style="height: 100%">
    <v-navigation-drawer
      floating
      permanent
      v-model="aiStore.isSideBarShow"
      elevation="1"
      class="rounded"
      width="240"
    >
      <div class="px-3 py-3">
        <div class="text-h6 font-weight-bold text-primary">OpenAI</div>
      </div>

      <v-list density="compact" nav>
        <v-list-item
          color="primary"
          v-for="item in channels"
          :prepend-icon="item.icon"
          :title="item.title"
          :value="item.title"
          :active="item.active"
        ></v-list-item>
      </v-list>
      <div class="px-3">
        <v-btn outlined block>
          <v-icon small left>mdi-plus</v-icon>
          addChannel
        </v-btn>
      </div>
    </v-navigation-drawer>

    <!-- channel view -->

    <v-sheet width="100%" height="100%" color="blue">
      <router-view
        :user="user"
        @toggle-menu="aiStore.isSideBarShow = !aiStore.isSideBarShow"
      ></router-view>
    </v-sheet>
  </div>
</template>

<style scoped lang="scss"></style>
