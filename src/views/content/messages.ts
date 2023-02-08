export const users = [
  {
    id: 1,
    name: "Ubaldo Romaguera",
    avatar: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460",
  },
  {
    id: 2,
    name: "Ruben Breitenberg",
    avatar: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460",
  },
  {
    id: 3,
    name: "Blaze Carter",
    avatar: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460",
  },
  {
    id: 4,
    name: "Bernita Lehner",
    avatar: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460",
  },
];

const messages = [
  "Do we have meeting today?",
  "I don't know",
  "the last time I tried this the monkey didn't survive. Let's hope it works better this time.",
  "😤 I am Spartacus",
  "who brought the gifts 🎁 ?",
  "who's birthday is it?",
  "not me",
  "someone said something about cake? 🍰🎂",
  "I don't know why. Just move on.",
  "third time's a charm",
  "testing in production... yolo",
  "🎉 beer friday, get the snacks",
  "deploying the new features to staging",
  "🍰 a piece of cake?",
];

export const getMessage = (user?: any) => {
  return {
    id: "_" + Math.random().toString(36).substr(2, 9),
    user: user || users[Math.floor(Math.random() * users.length)],
    text: messages[Math.floor(Math.random() * messages.length)],
    timestamp: new Date().getTime(),
  };
};
