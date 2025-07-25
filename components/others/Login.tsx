"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useLoginUserMutation } from "@/store/userApi";
import { useDispatch } from "react-redux";
import { addUser } from "@/store/userSlice";
import toast from "react-hot-toast";

const passwordSchema = z
  .string()
  .trim()
  .min(1, { message: "This field can not be empty" })
  .min(8, { message: "Password must be at least 8 characters long" })
  .regex(/[A-Z]/, {
    message: "Password must contain at least one uppercase letter",
  })
  .regex(/\d/, { message: "Password must contain at least one numeric digit" })
  .regex(/[!@#$%^&*(),.?":{}|<>]/, {
    message: "Password must contain at least one special character",
  });
const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" }) // Validates email format
    .min(8, { message: "Email must be at least 8 characters." }),
  password: passwordSchema,
});

export function Login() {
  const [showPass, setShowPass] = useState<boolean | undefined>(false);
  const [loginUser] = useLoginUserMutation();
  const dispatch = useDispatch();
 

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const res = await loginUser(values).unwrap();
      dispatch(addUser(res.auth_token));
      toast.success("Login successfull");
    } catch (error) {
      console.log(error)
      toast.error("User Not Found.Please Try Again!");
    }
  }
  return (
    <div className="space-y-5">
      <div className="lg:flex justify-center items-center gap-5 space-y-5">
        <div className="lg:my-0 my-2 whitespace-nowrap flex flex-col items-center space-y-2">
          {/* {Left Section} */}
          <h1 className="text-xl lg:text-3xl text-[#5c2653] font-bold mt-4">
            Welcome Back!
          </h1>
          <p className="text-xs lg:text-sm font-light">
            <span className="underline underline-offset-8 decoration-slate-950">
              Login to
            </span>{" "}
            your account
          </p>
        </div>
        {/* vertical Line */}
        <div className="hidden lg:block w-px h-56 bg-gray-500">&nbsp;</div>
        {/* Right Section */}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 lg:py-10 text-md"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex flex-col items-start">
                  <FormLabel>Enter Your Email</FormLabel>
                  <FormControl>
                    <Input {...field} className="font-light" />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="flex flex-col items-start">
                  <FormLabel>Enter Your Password</FormLabel>
                  <FormControl>
                    <div className="flex justify-between items-center relative w-full">
                      <Input
                        {...field}
                        type={showPass ? "text" : "password"}
                        className="font-light"
                      />
                      <IoMdEye
                        className={`absolute right-6 cursor-pointer opacity-50 ${
                          showPass ? "block" : "hidden"
                        }`}
                        onClick={() => setShowPass(false)}
                      />
                      <IoMdEyeOff
                        className={`absolute right-6  cursor-pointer opacity-50 ${
                          showPass ? "hidden" : "block"
                        }`}
                        onClick={() => setShowPass(true)}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-center items-center mx-4">
              <Button
                type="submit"
                className="w-48 lg:w-60 bg-[#99408b] hover:bg-[#8a3a7d] cursor-pointer"
              >
                Login
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
