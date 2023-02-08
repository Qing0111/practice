import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/home",
      redirect: "/",
    },
    {
      path: "/note",
      name: "note",
      component: () => import("../views/NoteView.vue"),
    },
    {
      path: "/quiz",
      name: "quizzes",
      component: () => import("../views/QuizzesView.vue"),
    },
    {
      path: "/quiz/:id",
      name: "quiz",
      component: () => import("../views/QuizView.vue"),
    },
    {
      path: "/:catchall(.*)*",
      name: "not found",
      component: () => import("../views/404View.vue"),
    },
    {
      path: "/todo",
      name: "todo",
      component: () => import("../views/TodosView.vue"),
    },
  ],
});

export default router;
