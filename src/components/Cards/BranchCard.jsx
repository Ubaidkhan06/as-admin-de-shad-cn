"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "../ui/separator";
import AddBranchCard from "../Modals/AddBranchCard";

const BranchCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Branch 1
          <AddBranchCard />
        </CardTitle>
        <CardDescription>Mumbai, Maharashtra, India</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="text-muted-foreground">Owner</p>
          <p>Shubham Kumar</p>
          <Separator />
        </div>
        <div>
          <p className="text-muted-foreground">Contact</p>
          <p>+91 9077653421</p>
          <Separator />
        </div>
        <div>
          <p className="text-muted-foreground">Address</p>
          <p>1 Shantiniketan Ambadi road vasai west</p>
          <Separator />
        </div>
      </CardContent>
    </Card>
  );
};

export default BranchCard;
