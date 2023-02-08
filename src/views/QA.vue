<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
// Demo messages and users
import { users, getMessage } from "./content/messages";
import ChannelMessage from "@/components/chat/ChannelMessage.vue";
import InputBox from "@/components/chat/InputBox.vue";
import { useAiStore } from "@/stores/aiStore";
import { generateApi } from "@/api/openAIApi";
const aiStore = useAiStore();

const route = useRoute();
const messages = ref<any[]>([]);

const user = ref({
  id: 1,
  name: "YANG",
  avatar: "https://avatars.githubusercontent.com/u/35951244?v=4",
});

const bot = ref({
  id: 2,
  name: "AI",
  avatar:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwrAiMevuwrbU9o0Ck2paVf4ufHUDb2dU48MEDrAlrQw&s",
});

const cusers = ref<any[]>([user.value, ...users]);
const startChannel = () => {
  messages.value = [];
  messages.value.push(getMessage(bot.value));
  messages.value.push(getMessage(user.value));
  messages.value.push(getMessage(bot.value));
  messages.value.push(getMessage(user.value));
};

const sendMessage = async (message: string) => {
  messages.value.push({
    id: "_" + Math.random().toString(36).substr(2, 9),
    user: user.value,
    text: message,
    timestamp: new Date().getTime(),
  });

  const response = await generateApi(message);
  const answer = response.data.choices[0].text;

  messages.value.push({
    id: "_" + Math.random().toString(36).substr(2, 9),
    user: bot.value,
    text: answer,
    timestamp: new Date().getTime(),
  });
};

onMounted(() => {
  startChannel();
  console.log("-----");
  console.log(messages.value);
});
</script>

<template>
  <!-- channel toolbar -->
  <v-app-bar class="px-5" flat height="64">
    <v-app-bar-nav-icon class="hidden-lg-and-up"></v-app-bar-nav-icon>
    <div class="title font-weight-bold"># Q&A</div>

    <v-spacer></v-spacer>

    <v-btn class="mx-1" icon @click="messages.push(getMessage())">
      <v-icon>mdi-account-group-outline</v-icon>
    </v-btn>
    <v-btn class="mx-1" icon @click="messages.push(getMessage(user))">
      <v-icon>mdi-account-group-outline</v-icon>
    </v-btn>
  </v-app-bar>

  <!-- channel messages -->
  <div class="channel-page">
    <div id="messages" ref="messages" class="messages mx-2">
      <transition-group name="list">
        <channel-message
          v-for="message in messages"
          :key="message.id"
          :message="message"
          :user="user"
          class="my-4 d-flex"
        />
      </transition-group>
    </div>

    <v-card
      :style="
        aiStore.isSideBarShow ? 'width: calc(100% - 240px)' : 'width: 100%)'
      "
      class="input-box pa-2"
    >
      <input-box channel="QA" @send-message="sendMessage" />
    </v-card>
  </div>
</template>

<style scoped lang="scss">
// List Transition Animation
.list-enter-active {
  transition: all 0.3s;
}

.list-move {
  transition: transform 0.3s;
}

.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}
// -- End List Transition Animation

.channel-page {
  position: relative;
  height: 100% !important;
  display: flex;
  flex-direction: column;
  background-repeat: repeat;
  background-image: url("@/assets/images/chat-bg-2.png");
  // background-image: url("https://images.unsplash.com/photo-1579187707643-35646d22b596?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80");

  background-attachment: fixed;

  .messages {
    flex-grow: 1;
    margin-bottom: 68px;
    overflow-x: none;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    min-height: 0;
  }

  .input-box {
    position: fixed;
    bottom: 0px;
    background-color: rgba(255, 255, 255, 0.8);
    width: calc(100% - 240px);
  }
}

.messages {
  padding-bottom: 0px;
}
</style>
