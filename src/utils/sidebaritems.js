import {
  CalendarCheck2,
  Home,
  LayoutDashboard,
  Menu,
  PieChart,
  Salad,
  User,
  User2,
} from "lucide-react";

export const sidebaritems = [
  {
    title: "Home",
    icon: <Home size={22}/>,
    link: "/dashboard/home",
  },
  {
    title: "Dashboard",
    icon: <LayoutDashboard size={22}/>,
    link: "/dashboard",
  },
  {
    title: "Menu",
    icon: <Menu size={22}/>,
    link: "/dashboard/menu",
  },
  {
    title: "Tables",
    icon: <Salad size={22}/>,
    link: "/dashboard/tables",
  },
  {
    title: "Order Status",
    icon: <PieChart size={22}/>,
    link: "/dashboard/order-status",
  },
  {
    title: "Users",
    icon: <User size={22}/>,
    link: "/dashboard/users",
  },
  {
    title: "Subscription",
    icon: <CalendarCheck2 size={22}/>,
    link: "/dashboard/subscription",
  },
];
