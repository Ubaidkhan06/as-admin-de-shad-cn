"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

export function CardWithForm() {
  const { toast } = useToast();

  const formSchema = z.object({
    email: z.string().email("Enter a valid email").max(50),
    password: z.string().min(1, "Password cannot be empty"),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    toast({
      title: (
        <div className="flex items-center gap-2">
          <CheckCircle />
          <span>Success</span>
        </div>
      ),
      description: "Logged in succesfully",
      variant: "success",
    });
  }

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle className="text-xl text-center">Login</CardTitle>
        {/* <CardDescription>Deploy your new project in one-click.</CardDescription> */}
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="johndoe@email.com"
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
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Password" {...field} />
                  </FormControl>
                  <FormDescription>
                    <FormMessage />
                  </FormDescription>
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Link href={"#"}>
          <Button variant="link">Forgot Password ?</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

const LoginPage = () => {
  return (
    <div className="w-screen h-screen flex">
      <div className="w-full relative">
        <Image
          src={"/images/loginImg.png"}
          width={500}
          height={500}
          alt="LoginImage"
          className="w-full h-full object-cover"
        />
        <Image
          src={"/images/logo.png"}
          width={250}
          height={250}
          alt="LoginImage"
          className="object-contain absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <div className="w-full grid place-content-center">
        <CardWithForm />
      </div>
    </div>
  );
};

export default LoginPage;
