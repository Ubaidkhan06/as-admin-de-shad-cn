"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

import Image from "next/image";
import { Button } from "../ui/button";
import { Heart, Home, Pencil, Star, Trash } from "lucide-react";
import { useToast } from "../ui/use-toast";
import ConfirmationDailog from "../Modals/ConfirmationDailog";
import Modal from "../Modals/Modal";
import { Separator } from "../ui/separator";

const DishCard = ({ image, title }) => {
  const { toast } = useToast();

  return (
    <Card className="">
      <CardHeader className="p-0">
        <div>
          <Image
            src={"/images/dish.webp"}
            width={100}
            height={100}
            alt="logo-1"
            className="w-full object-cover h-full"
          />
        </div>
      </CardHeader>
      <CardContent className="mt-2">
        <div className="space-y-2">
          <h1>Chicken Schezwan Noodles</h1>
          <Separator />
          <div className="flex justify-between w-full">
            <div>
              <p>&#x20B9; 250</p>
            </div>
            <Separator orientation="vertical" className="h-5" />
            <div>
              <span className="flex items-center gap-2">
                4.5 <Star size={18} />
              </span>
            </div>
          </div>
          <Separator />
        </div>
      </CardContent>
      <CardFooter className="">
        <div className="flex w-full items-center justify-between">
          <Button
            size="sm"
            variant="outline"
            onClick={() =>
              toast({
                title: "Added to Favourites.",
                description: "Dish has been added to favourites succesfully",
                variant: "success",
              })
            }
          >
            <Heart />
          </Button>
          <Modal trigger={<Pencil />} />
          <ConfirmationDailog
            
            dailogTrigger={<Trash />}
            confirmFunction={(e) =>
              toast({
                title: "Deleted",
                description: "Dish deleted succesfully",
                variant: "destructive",
              })
            }
          />
          <Switch />
        </div>
      </CardFooter>
    </Card>
  );
};

export default DishCard;
