"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { sidebaritems } from "@/utils/sidebaritems";
import {
  HomeIcon,
  LayoutDashboard,
  MenuIcon,
  PieChart,
  SubscriptIcon,
  Table,
  User2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathName = usePathname();
  console.log("", pathName);

  return (
    <Card className="min-w-[200px] rounded-l-none  h-screen flex flex-col items-center bg-primary">
      <CardHeader>
        <CardTitle>
          <Image src={"/images/logo.png"} width={100} height={100} alt="logo" />
        </CardTitle>
        {/* <CardDescription>Card Description</CardDescription> */}
      </CardHeader>
      <CardContent>
        <ul className="flex flex-col gap-4">
          {sidebaritems?.map((ele, idx) => (
            <Link href={ele?.link}>
              <li
                className={`flex ${
                  pathName?.endsWith(ele?.link)
                    ? "bg-background text-foreground"
                    : "text-primary-foreground"
                }  items-center gap-2 hover:bg-background whitespace-nowrap  hover:text-foreground p-3 rounded-lg`}
              >
                {ele?.icon} {ele?.title}
              </li>
            </Link>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default Sidebar;
