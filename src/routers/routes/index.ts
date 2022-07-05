import { RouteRecordRaw } from "vue-router";
import UsersPage from "@/pages/users.vue";
import paths from "@/routers/routes/routes.constants";

const routes: RouteRecordRaw[] = [
  {
    name: UsersPage.name,
    path: paths.USERS_PAGE,
    component: UsersPage,
  },
];

export default routes;
