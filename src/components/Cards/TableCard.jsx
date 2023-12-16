"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useToast } from "../ui/use-toast";
import { badgeVariants } from "../ui/badge";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { Save, SaveIcon } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const TableCard = ({ image, title }) => {
  const { toast } = useToast();

  const updateValues = [
    "Vacant",
    "Payment Done",
    "Preparing Food",
    "Prepared Food",
    "Delivered",
  ];

  const formSchema = z.object({
    status: z.string().min(1, "Required"),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      status: "",
    },
  });

  const onSubmit = (values) => {
    toast({
      title: "Status updated succesfully",
      description: JSON?.stringify(values),
      variant: "success",
    
    });
    console.log(values);
  };

  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Table 420</CardTitle>
        <CardDescription>
          Current Status :-{" "}
          <span className={badgeVariants({ variant: "destructive" })}>
            Occupied
          </span>{" "}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="text-muted-foreground">Guest Name</p>
          <p>Ubaid Khan</p>
          <Separator />
        </div>
        <div>
          <p className="text-muted-foreground">Order ID</p>
          <p>Ordr_224456</p>
          <Separator />
        </div>
      </CardContent>
      <CardFooter className="flex justify-center items-center gap-3">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-4">
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Update Status" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {updateValues?.map((ele, idx) => (
                        <SelectItem value={ele}>{ele}</SelectItem>
                      ))}
                    </SelectContent>

                    <FormDescription className="w-full h-5">
                      <FormMessage />
                    </FormDescription>
                  </Select>
                </FormItem>
              )}
            />

            <Button size="icon" type="submit" className="">
              <SaveIcon />
            </Button>
          </form>
        </Form>
      </CardFooter>
    </Card>
  );
};

export default TableCard;
