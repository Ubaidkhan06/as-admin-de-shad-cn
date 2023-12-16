import DishCard from "@/components/Cards/DishCard";
import { ModeToggle } from "@/components/ModeToggle";
import Navbar from "@/components/Layouts/Navbar";
import Sidebar from "@/components/Layouts/Sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/dashboard/home");

  return (
    <main className="flex">
      <Sidebar />
      <ScrollArea className="h-screen">
        <Navbar />
        <div className="w-full flex justify-center p-8 items-center flex-wrap gap-4">
          {/* <ModeToggle /> */}
          <DishCard />
        </div>
      </ScrollArea>
    </main>
  );
}
