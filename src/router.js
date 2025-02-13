import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import DashHeader from "./layout/DashHeader.vue";
import AppFooter from "./layout/AppFooter";
import Components from "./views/Components.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Profile from "./views/Profile.vue";
import Homepage from "./views/Homepage.vue";
import About from "./views/About.vue";
import Dashboard from "./views/Dashboard.vue";
import RequestDetails from "./views/RequestDetails.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "Homepage",
      components: {
        header: AppHeader,
        default: Homepage,
        footer: AppFooter,
      },
    },
    {
      path: "/components",
      name: "components",
      components: {
        header: AppHeader,
        default: Components,
        footer: AppFooter,
      },
    },
    {
      path: "/landing",
      name: "landing",
      components: {
        header: AppHeader,
        default: Landing,
        footer: AppFooter,
      },
    },
    {
      path: "/login",
      name: "login",
      components: {
        header: AppHeader,
        default: Login,
        footer: AppFooter,
      },
    },
    {
      path: "/register",
      name: "register",
      components: {
        header: AppHeader,
        default: Register,
        footer: AppFooter,
      },
    },
    {
      path: "/profile",
      name: "profile",
      components: {
        header: AppHeader,
        default: Profile,
        footer: AppFooter,
      },
    },
    {
      path: "/about",
      name: "about",
      components: {
        header: AppHeader,
        default: About,
        footer: AppFooter,
      },
    },
    {
      path: "/dashboard",
      name: "PrinterRequests",
      components: {
        header: DashHeader,
        default: Dashboard,
        footer: AppFooter,
      },
    },
    {
      path: "/dashboard/requests/:id",
      name: "RequestDetails",
      components: {
        header: DashHeader,
        default: RequestDetails,
        footer: AppFooter,
      },
      props: true,
    },
    
    
  ],

  scrollBehavior: (to) => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
});
