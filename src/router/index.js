import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import characters from "../views/characters.vue";
import Locations from "../views/Locations.vue";
const routes = [
  {
    path: "/",
    redirect: "/en/home",
  },
  {
    path: "/:lang(en|ar)/home",
    name: "Home",
    component: HomeView,
    props: true,
  },
  {
    path: "/:lang(en|ar)/characters",
    name: "characters",
    component: characters,
    props: true,
  },
  {
    path: "/:lang(en|ar)/Locations",
    name: "Locations",
    component: Locations,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
