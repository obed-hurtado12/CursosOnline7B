import Dashboard from "views/Dashboard/Dashboard.js";
import Tables from "views/Dashboard/Tables.js";
import Billing from "views/Dashboard/Billing.js";
import Profile from "views/Dashboard/Profile.js";
import SignIn from "views/Pages/SignIn.js";
import SignUp from "views/Pages/SignUp.js";
import ShoppingCart from "views/Dashboard/ShoppingCart.js"
import Error404 from "views/Dashboard/Error404.js";
import Chat from "views/Dashboard/Chat.js";
import Error500 from "views/Dashboard/Error500";
import Error502 from "views/Dashboard/Error502";
import Dashboard2 from "views/Dashboard/Dashboard2";

import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon,
  CartIcon,
  ChatIcon,
} from "components/Icons/Icons";
import { ProfileIcon } from "components/Icons/Icons";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "Dashboard",
    icon: <HomeIcon color='inherit' />,
    component: Dashboard2,
    layout: "/admin",
  },
  {
    path: "/landing",
    name: "Landing",
    rtlName: "Landing",
    icon: <SupportIcon color='inherit' />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/shoppingcart",
    name: "ShoppingCart",
    rtlName: "ShoppingCart",
    icon: <CartIcon color='inherit' />,
    component: ShoppingCart,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Tables",
    rtlName: "Tables",
    icon: <StatsIcon color='inherit' />,
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/billing",
    name: "Vista de Pago",
    rtlName: "Vista de Pago",
    icon: <CreditIcon color='inherit' />,
    component: Billing,
    layout: "/admin",
  },
  {
    path: "/error404",
    name: "Error 404",
    rtlName: "Error 404",
    icon: <DocumentIcon color='inherit' />,
    component: Error404,
    layout: "/admin",
  },
  {
    path: "/error500",
    name: "Error 500",
    rtlName: "Error 500",
    icon: <DocumentIcon color='inherit' />,
    component: Error500,
    layout: "/admin",
  },
  {
    path: "/error502",
    name: "Error 502",
    rtlName: "Error 502",
    icon: <DocumentIcon color='inherit' />,
    component: Error502,
    layout: "/admin",
  },
  {
    path: "/chat",
    name: "Chat",
    rtlName: "Chat",
    icon: <ProfileIcon color='inherit' />,
    component: Chat,
    layout: "/admin",
  },
  {
    name: "ACCOUNT PAGES",
    category: "account",
    rtlName: "ACCOUNT PAGES",
    state: "pageCollapse",
    views: [
      {
        path: "/profile",
        name: "Perfil",
        rtlName: "Perfil",
        icon: <PersonIcon color='inherit' />,
        secondaryNavbar: true,
        component: Profile,
        layout: "/admin",
      },
      {
        path: "/signin",
        name: "Iniciar Sesión",
        rtlName: "Iniciar Sesión",
        icon: <DocumentIcon color='inherit' />,
        component: SignIn,
        layout: "/auth",
      },
      {
        path: "/signup",
        name: "Registrarse",
        rtlName: "Registrarse",
        icon: <RocketIcon color='inherit' />,
        secondaryNavbar: true,
        component: SignUp,
        layout: "/auth",
      },
    ],
  },
];
export default dashRoutes;
