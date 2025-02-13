import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RegisterView from "../views/RegisterView.vue";
import LoginView from "../views/LoginView.vue";
import ShopView from "../views/ShopView.vue";
import PlantCare from "../views/PlantCare.vue";
import BlogsView from "../views/BlogsView.vue";
import ProductDetails from "../pages/ProductDetails/ProductDetails.vue";
import ProductCart from "../pages/ProductCart/ProductCart.vue";
import ProductCheckout from "../pages/ProductCheckout/ProductCheckout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "/",
      component: HomeView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/shop",
      name: "shop",
      component: ShopView,
    },
    {
      path: "/plants",
      name: "plants",
      component: PlantCare,
    },
    {
      path: "/blogs",
      name: "blogs",
      component: BlogsView,
    },
    {
      path: "/shop/:id",
      name: "product-details",
      component: ProductDetails,
    },
    {
      path: "/cart",
      name: "cart",
      component: ProductCart,
    },
    {
      path: "/checkout",
      name: "checkout",
      component: ProductCheckout,
      meta: { requiresAuth: true },
    },
  ],
});

export default router;
