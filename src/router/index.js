import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },{
    path: "/Products",
    name: "Products",
    component: ()=>import("../views/Products.vue")
  },{
    path: "/Contact",
    name: "Contact",
    component: ()=>import("../views/Contact.vue")
  },{
    path: "/PP",
    name: "PP",
    component: ()=>import("../views/privacy.vue")
  },{
    path: "/Services",
    name: "Service",
    component: ()=>import("../views/Service.vue")
  },
  {
    path: "/Login",
    name: "Login",
    component: ()=>import("../views/Login.vue")
  },{
    path: "/Dashboard",
    name: "Dashboard",
    component: ()=>import("../views/Dashboard.vue"),
    children: [
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: "",
        component: () =>
          import(/* webpackChunkName: "about" */ "../components/Home.vue")
      },
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: "/Productsadd",
        name: "/Productsadd",
        component: () =>
          import(/* webpackChunkName: "about" */ "../components/ProductsAdd.vue")
      },
      {
        // UserPosts will be rendered inside User's <router-view>
        // when /user/:id/posts is matched
        path: "/Projectsadd",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../components/Projectsadd.vue"
          )
      }]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
    window.scrollTo(0, 0);

    // More code ...
    next();
  });
export default router;
