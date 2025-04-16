import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRegisterUserMutation } from "@/store/userApi";
import toast from "react-hot-toast";

// Password validation schema
const passwordSchema = z
  .string()
  .trim()
  .min(1, { message: "This field cannot be empty" })
  .min(8, { message: "Password must be at least 8 characters long" })
  .regex(/[A-Z]/, {
    message: "Password must contain at least one uppercase letter",
  })
  .regex(/\d/, {
    message: "Password must contain at least one numeric digit",
  })
  .regex(/[!@#$%^&*(),.?":{}|<>]/, {
    message: "Password must contain at least one special character",
  });

// Full form schema
const formSchema = z
  .object({
    name: z.string().min(1, { message: "Full Name is required" }),
    phone: z
      .string()
      .min(10, { message: "Phone number must be at least 10 digits" })
      .regex(/^\d+$/, { message: "Phone number must be numeric" }),
    location: z.string().min(1, { message: "Location is required" }),
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email({ message: "Invalid email address" })
      .min(5, { message: "Email must be at least 5 characters" }),
    password: passwordSchema,
    confirm_password: z.string().trim().min(1, {
      message: "Confirm password is required",
    }),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"], // this must match the field name
  });

export function Register() {
  const [showPass, setShowPass] = useState(false);
  const [confirmPass, setConfirmPass] = useState(false);
  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirm_password: "",
      name: "",
      phone: "",
      location: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form Data Submitted:", values);
    try {
      const response = await registerUser({
        email: values.email,
        password: values.password,
        name: values.name,
        phone: values.phone,
        location: values.location,
      }).unwrap();

      console.log("Register", response);
      toast.success("Successfully Registered");
      
      form.reset();
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong. Please try again!");
    }
  }

  return (
    <div className="space-y-5 mt-3">
      <div className="mb-2">
        <h1 className="text-xl lg:text-3xl font-bold text-[#5c2653]">
          Create Your Account!
        </h1>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          {/* Full Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="flex flex-col items-start">
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input {...field} className="font-light" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex flex-col items-start">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} className="font-light" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="flex flex-col items-start">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <div className="relative w-full">
                    <Input
                      {...field}
                      type={showPass ? "text" : "password"}
                      className="font-light pr-10"
                    />
                    <span
                      className="absolute right-3 top-2.5 text-xl cursor-pointer opacity-60"
                      onClick={() => setShowPass(!showPass)}
                    >
                      {showPass ? <IoMdEyeOff /> : <IoMdEye />}
                    </span>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Confirm Password */}
          <FormField
            control={form.control}
            name="confirm_password"
            render={({ field }) => (
              <FormItem className="flex flex-col items-start">
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <div className="relative w-full">
                    <Input
                      {...field}
                      type={confirmPass ? "text" : "password"}
                      className="font-light pr-10"
                    />
                    <span
                      className="absolute right-3 top-2.5 text-xl cursor-pointer opacity-60"
                      onClick={() => setConfirmPass(!confirmPass)}
                    >
                      {confirmPass ? <IoMdEyeOff /> : <IoMdEye />}
                    </span>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Phone */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="flex flex-col items-start">
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input {...field} className="font-light" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Location */}
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem className="flex flex-col items-start">
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Input {...field} className="font-light" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <div className="flex justify-center items-center">
            <Button
              type="submit"
              className="w-48 lg:w-60 bg-[#99408b] hover:bg-[#8a3a7d] cursor-pointer"
            >
              {isLoading ? "Registering..." : "Sign Up"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
