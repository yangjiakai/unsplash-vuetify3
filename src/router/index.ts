import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: "/",
    //   name: "home",
    //   component: HomeView,
    // },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
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
