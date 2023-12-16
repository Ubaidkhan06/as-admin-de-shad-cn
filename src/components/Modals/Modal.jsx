"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
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
import { Button } from "../ui/button";
import { Input } from "../ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useToast } from "../ui/use-toast";
import { useState } from "react";

const Modal = ({ trigger, icon, add }) => {
  // const router = useRouter();'

  const [open, setOpen] = useState(false);

  const { toast } = useToast();

  const formSchema = z.object({
    name: z.string().max(25),
    image: z.string(),
    price: z.string(),
    cuisine: z.string(),
    foodType: z.string(),
    volume: z.string(),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: undefined,
      type: undefined,
      image: undefined,
      volume: undefined,
      price: undefined,
    },
  });

  function onSubmit(values) {
    toast({
      title: "Success",
      description: "Dish created sucesfully",
      variant: "success",
    });
    // router?.refresh();
    console.log(values);
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size={icon ? "icon" : "sm"}>
          {trigger}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{add ? "Add" : "Edit"} Dish</DialogTitle>
        </DialogHeader>

        {/* <DialogDescription> */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Dish Name</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Paneer Tikka" {...field} />
                  </FormControl>
                  <FormDescription>
                    <FormMessage />
                  </FormDescription>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cuisine"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormLabel>Cuisine</FormLabel>
                    <FormControl>
                      <SelectTrigger tabIndex={0}>
                        <SelectValue placeholder="Choose Cuisine Type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="chinese">Chinese</SelectItem>
                      <SelectItem value="thai">Thai</SelectItem>
                      <SelectItem value="indian">Indian</SelectItem>
                    </SelectContent>

                    <FormDescription>
                      <FormMessage />
                    </FormDescription>
                  </Select>
                </FormItem>
              )}
            />
            <div className="flex items-center gap-3">
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Image</FormLabel>
                    <FormControl>
                      <Input
                        tabIndex={0}
                        type="file"
                        placeholder="Choose a file"
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
                name="foodType"
                render={({ field }) => (
                  <FormItem className="w-1/2">
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormLabel>Food Type</FormLabel>
                      <FormControl>
                        <SelectTrigger tabIndex={0}>
                          <SelectValue placeholder="Choose Food Type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="light">Veg</SelectItem>
                        <SelectItem value="dark">Non-veg</SelectItem>
                      </SelectContent>

                      <FormDescription>
                        <FormMessage />
                      </FormDescription>
                    </Select>
                  </FormItem>
                )}
              />
            </div>

            <div className="flex items-center gap-3">
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Rs 250" {...field} />
                    </FormControl>
                    <FormDescription>
                      <FormMessage />
                    </FormDescription>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="volume"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Volume</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="1" {...field} />
                    </FormControl>
                    <FormDescription>
                      <FormMessage />
                    </FormDescription>
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" className="w-full">
              Save
            </Button>
          </form>
        </Form>
        {/* </DialogDescription> */}
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
