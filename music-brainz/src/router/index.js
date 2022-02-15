import { createWebHistory, createRouter } from "vue-router";
import Artiste from "../views/Artiste.vue";
import Home from "../views/Home.vue";
import Resultats from "../views/Resultats.vue";

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
    {        
        path: "/resultats",
        name: "Resultats",
        component: Resultats,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });

export default router;