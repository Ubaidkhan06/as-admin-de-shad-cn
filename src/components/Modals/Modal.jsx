"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
import axios from "axios";
import { getCookie } from "cookies-next";

const Modal = ({ trigger, icon, add, cuisines, dishMutate }) => {
  // const router = useRouter();'

  const token = getCookie("accessToken");

  const [open, setOpen] = useState(false);

  const { toast } = useToast();

  const formSchema = z.object({
    name: z.string().max(25)?.min(1, "Required"),
    // image: z.instanceof(File).refine((val) => !val, "Required"),
    price: z.string()?.min(1, "Required"),
    cuisine: z.string()?.min(1, "Required"),
    foodType: z.string()?.min(1, "Required"),
    volume: z.string().min(1, "Required"),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      cuisine: "",
      foodType: "",
      // image: new File([], ""),
      volume: "",
      price: "",
    },
  });

  async function onSubmit(values) {
    console.log(values);

    const formData = new FormData();
    formData?.append("name", values?.name);
    // formData?.append("image", values?.image);
    formData?.append("price", values?.price);
    formData?.append("volume", values?.volume);
    formData?.append("cuisine", values?.cuisine);
    formData?.append("type", values?.foodType);
    formData?.append("price", values?.price);
    console.log(formData);

    try {
      const res = await axios?.post(
        `${process?.env?.NEXT_PUBLIC_API_ENDPOINT}/api/dish/`,
        formData,
        {
          headers: {
            "content-type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res?.data);
      toast({
        title: "Success",
        description: "Dish created sucesfully",
        variant: "success",
      });
      dishMutate();
    } catch (er) {
      console.log(er);
      toast({
        title: "Error",
        description: "Something went wrong",
        variant: "destructive",
      });
    }
    form?.reset();
    // router?.refresh();
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
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-3"
            encType="multipart/form-data"
          >
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
                      {cuisines?.map((ele, idx) => (
                        <SelectItem key={idx} value={ele?.id} className="p-0">
                          <div className="flex items-center justify-start gap-2">
                            <Avatar className="p-2">
                              <AvatarImage
                                src={ele?.icon}
                                className="object-contain"
                              />
                              <AvatarFallback>{ele?.name}</AvatarFallback>
                            </Avatar>
                            <p>{ele?.name}</p>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>

                    <FormDescription>
                      <FormMessage />
                    </FormDescription>
                  </Select>
                </FormItem>
              )}
            />
            <div className="flex items-center gap-3">
              {/* <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    {console.log(field)}
                    <FormLabel>Image</FormLabel>
                    <FormControl>
                      <Input
                        tabIndex={0}
                        placeholder="Choose a file"
                        accept=".jpg, .jpeg, .png, .svg, .gif, .mp4"
                        type="file"
                        onChange={(e) =>
                          field.onChange(
                            e.target.files ? e.target.files[0] : null
                          )
                        }
                      />
                    </FormControl>
                    <FormDescription>
                      <FormMessage />
                    </FormDescription>
                  </FormItem>
                )}
              /> */}
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
                        <SelectItem value="Veg">Veg</SelectItem>
                        <SelectItem value="Non Veg">Non-veg</SelectItem>
                      </SelectContent>

                      <FormDescription>
                        <FormMessage />
                      </FormDescription>
                    </Select>
                  </FormItem>
                )}
              />
            </div>

            <div className="flex items-center justify-between gap-3">
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
