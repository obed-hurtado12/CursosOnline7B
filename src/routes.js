import Dashboard from "views/Dashboard/Dashboard.js";
import Tables from "views/Dashboard/Tables.js";
import Billing from "views/Dashboard/Billing.js";
import RTLPage from "views/RTL/RTLPage.js";
import Profile from "views/Dashboard/Profile.js";
import SignIn from "views/Pages/SignIn.js";
import SignUp from "views/Pages/SignUp.js";
import ShoppingCart from "views/Dashboard/ShoppingCart.js"
import Error404 from "views/Dashboard/Error404.js";
import Chat from "views/Dashboard/Chat.js";

import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon,
} from "components/Icons/Icons";

var dashRoutes = [
  {
    path: "/landing",
    name: "Landing",
    rtlName: "لوحة القيادة",
    icon: <HomeIcon color='inherit' />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/shoppingcart",
    name: "ShoppingCart",
    rtlName: "لوحة القيادة",
    icon: <HomeIcon color='inherit' />,
    component: ShoppingCart,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Data Tables",
    rtlName: "لوحة القيادة",
    icon: <StatsIcon color='inherit' />,
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/billing",
    name: "Vista de Pago",
    rtlName: "لوحة القيادة",
    icon: <CreditIcon color='inherit' />,
    component: Billing,
    layout: "/admin",
  },
  // {
  //   path: "/rtl-support-page",
  //   name: "RTL",
  //   rtlName: "آرتيإل",
  //   icon: <SupportIcon color='inherit' />,
  //   component: RTLPage,
  //   layout: "/rtl",
  // },
  {
    path: "/error404",
    name: "Error404",
    rtlName: "لوحة القيادة",
    icon: <StatsIcon color='inherit' />,
    component: Error404,
    layout: "/admin",
  },
  {
    path: "/chat",
    name: "Chat",
    rtlName: "لوحة القيادة",
    icon: <CreditIcon color='inherit' />,
    component: Chat,
    layout: "/admin",
  },
  {
    name: "SESIÓN Y CUENTA",
    category: "account",
    rtlName: "صفحات",
    state: "pageCollapse",
    views: [
      {
        path: "/profile",
        name: "Perfil",
        rtlName: "لوحة القيادة",
        icon: <PersonIcon color='inherit' />,
        secondaryNavbar: true,
        component: Profile,
        layout: "/admin",
      },
      {
        path: "/signin",
        name: "Iniciar Sesión",
        rtlName: "لوحة القيادة",
        icon: <DocumentIcon color='inherit' />,
        component: SignIn,
        layout: "/auth",
      },
      {
        path: "/signup",
        name: "Registrarse",
        rtlName: "لوحة القيادة",
        icon: <RocketIcon color='inherit' />,
        secondaryNavbar: true,
        component: SignUp,
        layout: "/auth",
      },
    ],
  },
];
export default dashRoutes;
