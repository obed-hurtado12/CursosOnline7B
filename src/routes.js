import Dashboard from "views/Dashboard/Dashboard.js";
import Tables from "views/Dashboard/Tables.js";
import Billing from "views/Dashboard/Billing.js";
import RTLPage from "views/RTL/RTLPage.js";
import Profile from "views/Dashboard/Profile.js";
import SignIn from "views/Pages/SignIn.js";
import SignUp from "views/Pages/SignUp.js";
import ShoppingCart from "views/Dashboard/ShoppingCart.js"
import Detail from "views/Dashboard/Detail";
import Pricing from "views/Dashboard/Pricing";
import Charts from "views/Dashboard/Charts"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faTag } from '@fortawesome/free-solid-svg-icons'

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
    path: "/pricing",
    name: "Pricing",
    rtlName: "لوحة القيادة",
    icon: <FontAwesomeIcon icon={faTag} color='inherit'/>,
    component: Pricing,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Tables",
    rtlName: "لوحة القيادة",
    icon: <StatsIcon color='inherit' />,
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/charts",
    name: "Charts",
    rtlName: "لوحة القيادة",
    icon: <StatsIcon color='inherit' />,
    component: Charts,
    layout: "/admin",
  },
  {
    path: "/details",
    name: "detalles",
    rtlName: "لوحة القيادة",
    icon: <CreditIcon color='inherit' />,
    component: Detail,
    layout: "/admin",
  },
  {
    path: "/shoppingcart",
    name: "Checkout",
    rtlName: "لوحة القيادة",
    icon: <HomeIcon color='inherit' />,
    component: ShoppingCart,
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
  {
    path: "/charts",
    name: "Charts",
    rtlName: "آرتيإل",
    icon: <SupportIcon color='inherit' />,
    component: Charts,
    layout: "/charts",
  },
  {
    path: "/rtl-support-page",
    name: "RTL",
    rtlName: "آرتيإل",
    icon: <SupportIcon color='inherit' />,
    component: RTLPage,
    layout: "/rtl",
  },
  {
    name: "ACCOUNT PAGES",
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
