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
import useSWR from "swr";
import { getCookie } from "cookies-next";
import { getConfigSwr } from "@/utils/getConfig";
import { fetcher } from "@/utils/fetcher";

const ViewOrderDetails = ({ trigger, icon, link }) => {
  const [open, setOpen] = useState(false);
  const token = getCookie("accessToken");
  const config = getConfigSwr(token);

  const { data, isLoading, error } = useSWR(
    [`${process?.env?.NEXT_PUBLIC_API_ENDPOINT}/api/order/${trigger}/`, config],
    ([url, config]) => fetcher(url, config)
  );

  console.log(data, error);

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
              <p>{data?.table?.name}</p>
              <Separator />
            </div>
            <div className="flex-1">
              <p className="text-muted-foreground">Order ID</p>
              <p>{data?.order_id}</p>
              <Separator />
            </div>
          </div>
          <div className="flex items-center justify-between gap-10">
            <div className="flex-1">
              <p className="text-muted-foreground">Customer Name</p>
              <p>{data?.guest_name  }</p>
              <Separator />
            </div>
            <div className="flex-1">
              <p className="text-muted-foreground">Order Status</p>
              <p>{data?.order_status}</p>
              <Separator />
            </div>
          </div>
          <div>
            <p className="text-muted-foreground">Items Ordered</p>
            <ScrollArea className="h-44 p-2">
              {data?.order_items?.map(({ dish }, idx) => (
                <div
                  className="flex items-center justify-between mt-2"
                  key={idx}
                >
                  <img src={dish?.image} width={70} height={70} alt="dist" className="object-cover h-10 w-14" />
                  <p>{dish?.name}</p>
                  <p>Rs {dish?.price}</p>
                </div>
              ))}
            </ScrollArea>
            <div className="flex items-center justify-between bg-accent text-accent-foreground p-2">
              <p>Total Amount</p>
              <p>Rs {data?.amount}</p>
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
