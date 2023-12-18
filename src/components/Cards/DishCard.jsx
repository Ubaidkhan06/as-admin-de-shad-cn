"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Switch } from "@/components/ui/switch";

import Image from "next/image";
import { Button } from "../ui/button";
import { Heart, Home, Pencil, Star, Trash } from "lucide-react";
import { useToast } from "../ui/use-toast";
import ConfirmationDailog from "../Modals/ConfirmationDailog";
import Modal from "../Modals/Modal";
import { Separator } from "../ui/separator";
import axios from "axios";
import { getCookie } from "cookies-next";
import { getConfigSwr } from "@/utils/getConfig";

const DishCard = ({ image, name, price, rating, id, dishMutate }) => {
  const { toast } = useToast();
  const token = getCookie("accessToken");
  const config = getConfigSwr(token);

  console.log(id);

  const handleDelete = async () => {
    try {
      const res = await axios?.delete(
        `${process?.env?.NEXT_PUBLIC_API_ENDPOINT}/api/dish/${id}/`,
        config
      );
      dishMutate();
      toast({
        title: "Success",
        description: "Dish deleted succesfully",
        variant: "success",
      });
      console.log(res?.data);
    } catch (err) {
      toast({
        title: "Error",
        description: "Dish deleted succesfully",
        variant: "destructive",
      });
      console.log(err);
    }
  };

  return (
    <Card className="max-w-min">
      <CardHeader className="p-0">
        <div className="w-full">
          <img src={image} className="object-cover h-40 w-full" />
          {/* <Image
            src={image}
            width={80}
            height={80}
            alt="logo-1"
            className="w-full object-cover h-44"
          /> */}
        </div>
      </CardHeader>
      <CardContent className="mt-2">
        <div className="space-y-2">
          <h1>{name}</h1>
          <Separator />
          <div className="flex justify-between w-full">
            <div>
              <p>&#x20B9; {price}</p>
            </div>
            <Separator orientation="vertical" className="h-5" />
            <div>
              <span className="flex items-center gap-2">
                {rating?.toFixed(1)} <Star size={18} />
              </span>
            </div>
          </div>
          <Separator />
        </div>
      </CardContent>
      <CardFooter className="">
        <div className="flex w-full items-center justify-between gap-2">
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
            variant={"outline"}
            dailogTrigger={<Trash />}
            confirmFunction={handleDelete}
          />
          <Switch />
        </div>
      </CardFooter>
    </Card>
  );
};

export default DishCard;
