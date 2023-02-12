import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "note",
      component: () => import("../views/NoteView.vue"),
    },
    {
      path: "/note",
      redirect: "/",
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
