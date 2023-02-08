<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { generateApi } from "@/api/openAIApi";
const animalData = ref();
const animalName = ref("");

const initData = async () => {
  const response = await generateApi("wangcai");
  animalData.value = response.data;
  console.log(animalData.value);
};

const createName = async () => {
  console.log(animalName.value);
  const response = await generateApi(animalName.value);
  animalData.value = response.data;
};

onMounted(() => {
  initData();
});
</script>

<template>
  <div>
    <v-sheet max-width="1600" class="mx-auto my-5 pa-5">
      <h1 class="text-h5 mb-5">generateApi</h1>
      <v-text-field v-model="animalName" label="Animal Name"></v-text-field>
      <v-btn color="success" @click="createName()">生成</v-btn>
      <div v-if="animalData">
        {{ animalData.choices[0].text }}
      </div>
    </v-sheet>
  </div>
</template>

<style scoped lang="scss"></style>
