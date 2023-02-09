<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { generateApi, createImageApi } from "@/api/openAIApi";
const animalData = ref();
const animalName = ref("");

const initData = async () => {
  const response = await generateApi("wangcai");
  animalData.value = response.data;
  console.log(animalData.value);
};

const createName = async () => {
  console.log(animalName.value);
  const response = await qaApi(animalName.value);
  animalData.value = response.data;
};
const imgSrc = ref("");
const createImage = async () => {
  const response = await createImageApi();
  imgSrc.value = response.data.data[0].url;
};

onMounted(() => {
  initData();
});

// Api Key
const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

// 允许跨域
axios.defaults.headers["Access-Control-Allow-Origin"] = "*";

const chatGptApi = axios.create({
  baseURL: "https://api.openai.com/v1",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
  },
});

const qaApi = (question: string) => {
  return chatGptApi.post("/completions", {
    model: "text-davinci-003",
    prompt: `What is the answer to ${question}?`,
    max_tokens: 200,
    n: 1,
    stop: null,
    temperature: 0.5,
  });
};
</script>

<template>
  <div>
    <v-sheet max-width="1600" class="mx-auto my-5 pa-5">
      <h1 class="text-h5 mb-5">generateApi</h1>
      <v-text-field v-model="animalName" label="Animal Name"></v-text-field>
      <v-btn color="success" @click="createName()">生成</v-btn>
      <v-btn color="success" @click="createImage()">生成</v-btn>
      <div v-if="animalData">
        {{ animalData.choices[0].text }}
      </div>
      <v-img :src="imgSrc" width="400"></v-img>
    </v-sheet>
  </div>
</template>

<style scoped lang="scss"></style>
