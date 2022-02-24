import { createWebHistory, createRouter } from "vue-router";
import Artiste from "../views/Artiste.vue";
import Resultats from "../views/Resultats.vue";
import Titre from "../views/Titre.vue";
import Home from "../views/Home.vue";
import NoResult from "../views/NoResult.vue";
import NotFound from "../views/NotFound.vue";


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
    {
        path: "/titre",
        name: "Titre",
        component: Titre,
    },
    {
        path: "/no-result",
        name: "NoResult",
        component: NoResult,
    },
    {
        path: '/:pathMatch(.*)',
        name: 'NotFound',
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;