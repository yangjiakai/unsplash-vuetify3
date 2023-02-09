<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
// Demo messages and users
import ChannelMessage from "@/components/chat/ChannelMessage.vue";
import InputBox from "@/components/chat/InputBox.vue";
import { useAiStore } from "@/stores/aiStore";
import { useChatStore } from "@/stores/chatStore";
import { generateApi } from "@/api/openAIApi";
import type { User, Message } from "@/types/chatTypes";
const aiStore = useAiStore();
const chatStore = useChatStore();
const route = useRoute();
const messages = ref<any[]>([]);

const you = ref({
  id: 1,
  name: "YOU",
  avatar: "https://avatars.githubusercontent.com/u/35951244?v=4",
});

const bot = ref({
  id: 2,
  name: "AI",
  avatar:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwrAiMevuwrbU9o0Ck2paVf4ufHUDb2dU48MEDrAlrQw&s",
});

// 初期显示
const startChannel = () => {};

const createMessage = (user: User, text: string) => {
  const message: Message = {
    id: "_" + Math.random().toString(36).substring(2, 11),
    user,
    text,
    timestamp: new Date().getTime(),
  };
  return message;
};

const sendMessage = async (message: string) => {
  // 发送问题
  let currentMessage = createMessage(you.value, message);
  chatStore.addToHistory(currentMessage);

  // 等待AI开始
  currentMessage = createMessage(bot.value, "让我想想,请稍等......");
  chatStore.addToHistory(currentMessage);
  // 请求补全

  const response = await generateApi(message);
  const answer = response.data.choices[0].text;
  // 等待AI结束
  chatStore.removeLatestMessage();
  if (response.data.error) {
    console.log(response.data.error);
  } else {
    // 回答问题
    if (answer && answer != "") {
      currentMessage = createMessage(bot.value, answer);
      chatStore.addToHistory(currentMessage);
    }
    scrollToBottom();
  }
};

const refMessages = ref();
const refPage = ref();

const scrollToBottom = () => {
  nextTick(() => {
    // 滚动到最底部
    console.log(refMessages.value.scrollTop);
    console.log(refMessages.value.scrollHeight);
  });
};

onMounted(() => {
  startChannel();
});
</script>

<template>
  <!-- channel toolbar -->
  <v-app-bar class="px-5" flat height="64">
    <v-app-bar-nav-icon class="hidden-lg-and-up"></v-app-bar-nav-icon>
    <div class="title font-weight-bold"># Q&A</div>

    <v-spacer></v-spacer>

    <v-btn class="mx-1" icon>
      <v-icon>mdi-account-group-outline</v-icon>
    </v-btn>
    <v-btn class="mx-1" icon>
      <v-icon @click="scrollToBottom">mdi-account-group-outline</v-icon>
    </v-btn>
  </v-app-bar>

  <!-- channel messages -->
  <div ref="refMessages" class="channel-page">
    <div id="messages" ref="refMessages" class="messages px-5">
      <transition-group name="list">
        <channel-message
          v-for="message in chatStore.chatHistory"
          :key="message.id"
          :message="message"
          :user="you"
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
      <input-box channel="QA" @sendMessage="sendMessage" />
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
  height: 100%;
  display: flex;
  flex-direction: column;
  background-repeat: repeat;
  background-image: url("@/assets/images/chat-bg-2.png");
  // background-image: url("https://images.unsplash.com/photo-1579187707643-35646d22b596?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80");

  background-attachment: fixed;

  .messages {
    flex-grow: 1;
    margin-bottom: 68px;
    -webkit-overflow-scrolling: touch;
    overflow-y: scroll;
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
