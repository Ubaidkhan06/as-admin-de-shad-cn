import Navbar from "@/components/Layouts/Navbar";
import Sidebar from "@/components/Layouts/Sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const DashboardLayout = ({ children }) => {
  return (
    <main className="flex">
      <Sidebar />
      <ScrollArea className="w-full h-screen">
        <Navbar />
        <Separator />
        {children}
      </ScrollArea>
    </main>
  );
};

export default DashboardLayout;
