import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/ui",
      name: "ui",
      component: () =>
        import(/* webpackChunkName: "unsplash-ui" */ "@/views/UI.vue"),
    },

    {
      path: "/",
      component: () =>
        import(
          /* webpackChunkName: "app-unsplash" */ "@/views/UnsplashApp.vue"
        ),

      children: [
        {
          path: "",
          // redirect: "photos",
          component: () =>
            import(
              /* webpackChunkName: "unsplash-photos" */ "@/views/PhotosPage.vue"
            ),
        },
        {
          path: "user/:username",
          name: "unsplash-user",
          component: () =>
            import(
              /* webpackChunkName: "unsplash-user" */ "@/views/UserPage.vue"
            ),
        },
        {
          path: "collection/:id",
          name: "unsplash-collection",
          component: () =>
            import(
              /* webpackChunkName: "unsplash-collection" */ "@/views/CollectionPage.vue"
            ),
        },
        {
          path: "my-page",
          name: "unsplash-my-page",
          component: () =>
            import(
              /* webpackChunkName: "unsplash-my-page" */ "@/views/MyPage.vue"
            ),
        },
      ],
    },
  ],
});

export default router;
