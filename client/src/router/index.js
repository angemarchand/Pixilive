import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: '/register',
    name: 'Register',
    component: () => import (/* webpackChunkName: "register" */ '../views/Register.vue')
  },

  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },

  {
    path: '/admin',
    name: 'Admin',
    component: () => import (/* webpackChunkName: "admin" */ '../views/Admin.vue')
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
