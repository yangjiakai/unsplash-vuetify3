<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
// Props
const props = defineProps({
  // Current logged user
  user: {
    type: Object,
    default: () => {},
  },
  // Message to display
  message: {
    type: Object,
    default: () => ({}),
  },
});

const isOwnMessage = computed(() => {
  return props.user.id === props.message.user.id;
});

onMounted(() => {});
</script>

<template>
  <div
    class="d-flex flex-grow-1 align-center"
    :class="{ 'flex-row-reverse': isOwnMessage }"
  >
    <v-avatar size="40" class="elevation-1 grey lighten-3">
      <v-img v-if="message.user.avatar" :src="message.user.avatar" />
    </v-avatar>

    <div class="mx-2">
      <v-card
        class="pa-1"
        :class="{ 'bg-primary': isOwnMessage }"
        :dark="isOwnMessage"
      >
        <div class="font-weight-bold pa-2">
          {{ message.text }}
          <span class="text-red">{{ message.user.name }}</span>
        </div>
      </v-card>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
