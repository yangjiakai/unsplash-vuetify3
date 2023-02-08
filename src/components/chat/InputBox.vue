<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
const inputStr = ref("");
const props = defineProps({
  // Current channel name
  channel: {
    type: String,
    default: "",
  },
});

// const emit = defineEmits("sendMessage");
const sendMessage = () => {
  if (!inputStr.value) return;
};
</script>

<template>
  <div class="d-flex">
    <v-text-field
      ref="input"
      v-model="inputStr"
      placeholder="SendMessage"
      class="font-weight-bold position-relative flex-1"
      hide-details
      append-icon="mdi-home"
      @keyup.enter="sendMessage"
    >
    </v-text-field>
    <v-btn color="success">text</v-btn>
    <v-btn class="mx-1" :disabled="!inputStr" @click="sendMessage"
      ><v-icon small>mdi-send</v-icon></v-btn
    >
  </div>
</template>

<style scoped lang="scss"></style>
