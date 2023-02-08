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

const emit = defineEmits(["sendMessage"]);
const sendMessage = () => {
  if (!inputStr.value) return;
  emit("sendMessage", inputStr.value);
};
</script>

<template>
  <div class="d-flex align-center">
    <v-text-field
      ref="input"
      v-model="inputStr"
      placeholder="SendMessage"
      class="font-weight-bold position-relative flex-1"
      hide-details
      @keyup.enter="sendMessage"
    >
    </v-text-field>

    <v-btn
      icon
      variant="text"
      class="mx-1"
      :disabled="!inputStr"
      @click="sendMessage"
      ><v-icon>mdi-send</v-icon></v-btn
    >
  </div>
</template>

<style scoped lang="scss"></style>
