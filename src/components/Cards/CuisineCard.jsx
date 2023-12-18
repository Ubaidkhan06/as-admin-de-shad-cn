"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ConfirmationDailog from "../Modals/ConfirmationDailog";
import { Button } from "../ui/button";
import { PencilIcon, Trash } from "lucide-react";

const CuisineCard = ({ image, name }) => {
  return (
    <Card className="w-fit">
      <CardHeader className="p-2">
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center items-center p-2">
        <Avatar className="p-1">
          <AvatarImage src={image}className="object-contain"/>
          <AvatarFallback>{name}</AvatarFallback>
        </Avatar>
      </CardContent>
      <CardFooter className="p-2">
        <ConfirmationDailog variant={"destructive"} size={"icon"} dailogTrigger={<Trash size={16} />} />
        <Button size="icon"><PencilIcon size={16} /></Button>
      </CardFooter>
    </Card>
  );
};

export default CuisineCard;
