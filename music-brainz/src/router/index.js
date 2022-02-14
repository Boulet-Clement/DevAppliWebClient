import { createWebHistory, createRouter } from "vue-router";
import Artiste from "../views/Artiste.vue";
import Home from "../views/Home.vue";

const routes = [
    {        
        path: "/",
        name: "Home",
        component: Home,
    },
    {        
        path: "/artiste",
        name: "Artiste",
        component: Artiste,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });

export default router;