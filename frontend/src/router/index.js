import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import UserView from "../views/UserView.vue";
import SummedAgeView from "../views/SummedAgeView.vue";
import DynamicTableView from "../views/DynamicTableView.vue";
import UserApplicationView from "../views/UserApplicationView.vue";
import SlowOrganizationsView from "../views/SlowOrganizationsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/users",
      name: "users",
      component: UserView,
    },
    {
      path: "/summedAge",
      name: "summedAge",
      component: SummedAgeView,
    },
    {
      path: "/dynamicTable",
      name: "dynamicTable",
      component: DynamicTableView,
    },
    {
      path: "/userApplications",
      name: "userApplications",
      component: UserApplicationView,
    },
    {
      path: "/slowOrganizations",
      name: "slowOrganizations",
      component: SlowOrganizationsView,
    },
  ],
});

export default router;
