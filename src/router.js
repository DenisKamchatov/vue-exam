import Vue from "vue"
import VueRouter from "vue-router"
import MainPage from "./pages/MainPage";
import AboutUsPage from "./pages/AboutUsPage";
import BoardPage from "./pages/BoardPage";

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        component: MainPage
    },
    {
        path: "/about-us",
        component: AboutUsPage
    },
    {
        path: "/board",
        component: BoardPage
    },
]

export default new VueRouter({
    mode: "history",
    routes
})