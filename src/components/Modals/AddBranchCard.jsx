"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { useState } from "react";
import { useToast } from "../ui/use-toast";
import { Button, buttonVariants } from "../ui/button";
import { Input } from "../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Pencil } from "lucide-react";

const AddBranchCard = () => {
  const [open, setOpen] = useState(false);

  const { toast } = useToast();

  const formSchema = z.object({
    name: z.string().max(25),
    address: z.string(),
    city: z.string(),
    state: z.string(),
    country: z.string(),
    ownerName: z.string(),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: undefined,
      address: undefined,
      city: undefined,
      state: undefined,
      country: undefined,
      ownerName: undefined,
    },
  });

  function onSubmit(values) {
    toast({
      title: "Success",
      description: "User created sucesfully",
      variant: "success",
    });
    // router?.refresh();
    console.log(values);
    setOpen(false);
  }


  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        className={buttonVariants({ size: "icon", variant: "ghost" })}
      >
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Pencil />
            </TooltipTrigger>
            <TooltipContent>
              <p>Edit Branch Details</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Branch</DialogTitle>
          <DialogDescription>Fill in the details</DialogDescription>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
              <div className="flex items-center gap-2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Branch Name</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Branch XYZ"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        <FormMessage />
                      </FormDescription>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="ownerName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Owner Name</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormDescription>
                        <FormMessage />
                      </FormDescription>
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormLabel>Country</FormLabel>
                      <FormControl>
                        <SelectTrigger tabIndex={0}>
                          <SelectValue placeholder="Select a Country" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="light">India</SelectItem>
                        <SelectItem value="dark">England</SelectItem>
                      </SelectContent>

                      <FormDescription>
                        <FormMessage />
                      </FormDescription>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormLabel>State</FormLabel>
                      <FormControl>
                        <SelectTrigger tabIndex={0}>
                          <SelectValue placeholder="Choose State" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="light">Maharashtra</SelectItem>
                        <SelectItem value="dark">Goa</SelectItem>
                      </SelectContent>

                      <FormDescription>
                        <FormMessage />
                      </FormDescription>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormLabel>City</FormLabel>
                      <FormControl>
                        <SelectTrigger tabIndex={0}>
                          <SelectValue placeholder="Select a City" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="light">Vasai</SelectItem>
                        <SelectItem value="dark">Banglore</SelectItem>
                      </SelectContent>

                      <FormDescription>
                        <FormMessage />
                      </FormDescription>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="xyz lane , abc, pqr"
                          {...field}
                        />
                      </FormControl>

                      <FormDescription>
                        <FormMessage />
                      </FormDescription>
                    </Select>
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">
                Create
              </Button>
            </form>
          </Form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddBranchCard;
