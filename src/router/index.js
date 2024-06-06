import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/accessibility",
      name: "accessibility",
      component: () => import("../components/Accessibility.vue"),
    },
    {
      path: "/graphics",
      name: "graphics",
      component: () => import("../components/Graphics.vue"),
    },
    {
      path: "/usability",
      name: "usability",
      component: () => import("../components/Usability.vue"),
    },
    {
      path: "/accessibilitymodel",
      name: "accessibilitymodel",
      component: () => import("../components/AccessibilityModel.vue"),
    },
    {
      path: "/inclusiveeducation",
      name: "inclusiveeducation",
      component: () => import("../components/InclusiveEducation.vue"),
    },
    {
      path: "/companyaccessibility",
      name: "companyaccessibility",
      component: () => import("../components/CompanyAccessibility.vue"),
    },
    {
      path: "/form",
      name: "form",
      component: () => import("../components/NewForm.vue"),
    },
    {
      path: "/review-1",
      name: "review-1",
      component: () => import("../components/ReviewOne.vue"),
    },
    {
      path: "/end",
      name: "end",
      component: () => import("../components/End.vue"),
    },
  ],
});

export default router;
