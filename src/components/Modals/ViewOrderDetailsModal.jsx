"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { useState } from "react";
import { Separator } from "../ui/separator";
import Image from "next/image";
import { ScrollArea } from "../ui/scroll-area";

const ViewOrderDetails = ({ trigger, icon, link }) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant={link ? "link" : "outline"}
          size={icon ? "icon" : "default"}
        >
          {trigger}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Order Details</DialogTitle>
        </DialogHeader>
        <DialogDescription>Current Order Details</DialogDescription>
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-10">
            <div className="flex-1">
              <p className="text-muted-foreground">Table</p>
              <p>Table 1</p>
              <Separator />
            </div>
            <div className="flex-1">
              <p className="text-muted-foreground">Order ID</p>
              <p>Order_7998</p>
              <Separator />
            </div>
          </div>
          <div className="flex items-center justify-between gap-10">
            <div className="flex-1">
              <p className="text-muted-foreground">Customer Name</p>
              <p>John Doe</p>
              <Separator />
            </div>
            <div className="flex-1">
              <p className="text-muted-foreground">Order Status</p>
              <p>Booked</p>
              <Separator />
            </div>
          </div>
          <div>
            <p className="text-muted-foreground">Items Ordered</p>
            <ScrollArea className="h-44 p-2">
              <div className="flex items-center justify-between mt-2">
                <Image
                  src={"/images/dish.webp"}
                  width={70}
                  height={70}
                  alt="dist"
                />
                <p>Masala Dosa</p>
                <p>Rs 250</p>
              </div>
              <div className="flex items-center justify-between mt-2">
                <Image
                  src={"/images/dish.webp"}
                  width={70}
                  height={70}
                  alt="dist"
                />
                <p>Masala Dosa</p>
                <p>Rs 250</p>
              </div>
              <div className="flex items-center justify-between mt-2">
                <Image
                  src={"/images/dish.webp"}
                  width={70}
                  height={70}
                  alt="dist"
                />
                <p>Masala Dosa</p>
                <p>Rs 250</p>
              </div>
            </ScrollArea>
            <div className="flex items-center justify-between bg-accent text-accent-foreground p-2">
              <p>Total Amount</p>
              <p>Rs 1000</p>
            </div>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild className="m-auto">
            <Button>Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ViewOrderDetails;
