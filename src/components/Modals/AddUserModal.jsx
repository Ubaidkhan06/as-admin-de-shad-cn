"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
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

import { useState } from "react";
import { useToast } from "../ui/use-toast";
import { Button, buttonVariants } from "../ui/button";
import { Input } from "../ui/input";

const AddUserModal = () => {
  const [open, setOpen] = useState(false);

  const { toast } = useToast();

  const formSchema = z.object({
    name: z.string().max(25),
    email: z.string().email(),
    branch: z.string(),
    role: z.string(),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: undefined,
      email: undefined,
      branch: undefined,
      role: undefined,
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
      <DialogTrigger className={buttonVariants()}>Add User</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add User</DialogTitle>
          <DialogDescription>Fill in the details</DialogDescription>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormDescription>
                      <FormMessage />
                    </FormDescription>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="john@doe.com"
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
              <FormField
                control={form.control}
                name="branch"
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormLabel>Branch</FormLabel>
                      <FormControl>
                        <SelectTrigger tabIndex={0}>
                          <SelectValue placeholder="Select a Branch" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="light">Branch 1</SelectItem>
                        <SelectItem value="dark">Branch 2</SelectItem>
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
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormLabel>Role</FormLabel>
                      <FormControl>
                        <SelectTrigger tabIndex={0}>
                          <SelectValue placeholder="Choose Role" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="light">Manager</SelectItem>
                        <SelectItem value="dark">Waiter</SelectItem>
                      </SelectContent>

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

export default AddUserModal;
