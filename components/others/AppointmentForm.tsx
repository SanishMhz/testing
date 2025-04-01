
"use client";
import {
  Form,
  FormControl,
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

import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "../ui/button";
import { BookList } from "@/constants";

const AppointmentForm = () => {
  const bookingFormSchema = z.object({
    firstName: z
      .string()
      .min(5, "First name must be at least 5 characters")
      .max(50),
    lastName: z
      .string()
      .min(5, "Last name must be at least 5 characters")
      .max(50),
    contact: z
      .string()
      .length(10, "Contact must be exactly 10 digits")
      .regex(/^\d+$/, "Contact must contain only numbers"),
    email: z
      .string()
      .min(8, { message: "Email must be at least 8 characters." })
      .email({ message: "Invalid email address" })
      .trim(),
    grade: z.string().trim(),
    description: z
      .string()
      .min(50, { message: "Message should be at least 50 characters." })
      .max(500, { message: "Message should not exceed 500 characters." }),
  });
  const form = useForm<z.infer<typeof bookingFormSchema>>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      contact: "",
      email: "",
      grade: "",
      description: "",
    },
  });

  function onSubmit(values: z.infer<typeof bookingFormSchema>) {
    console.log(values);
  }

  return (
    <div className="text-gray-950 ">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel className="sm:text-lg">First Name</FormLabel>
                <FormControl>
                  <Input placeholder="Harry" {...field} className="w-full" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel className="sm:text-lg">Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Porter" {...field} className="w-full" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="contact"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel className="sm:text-lg">Contact Number</FormLabel>
                <FormControl>
                  <Input
                    placeholder="+977 XXXXXXXXXX"
                    {...field}
                    className="w-full"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel className="sm:text-lg">Email Address</FormLabel>
                <FormControl>
                  <Input
                    placeholder="eg@gmail.com"
                    {...field}
                    className="w-full"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* for grade */}
          <FormField
            control={form.control}
            name="grade"
            render={({ field }) => (
              <FormItem className="sm:col-span-2 space-y-1">
                <FormLabel className="sm:text-lg">
                  Enrolling for grade
                </FormLabel>
                <FormControl>
                  <Select>
                    <SelectTrigger className="w-full border-gray-500">
                      <SelectValue placeholder="Select Services" />
                    </SelectTrigger>
                    <SelectContent className="bg-white overflow-auto">
                      {BookList.map((item, index) => (
                        <SelectItem value={item.value} key={index} className="text-gray-950">
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Text Area for Message and Enquiry */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="sm:col-span-2 space-y-1">
                <FormLabel className="sm:text-lg">Message or Enquiry</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Type your message here."
                    {...field}
                    className="w-full h-40"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Submit Button */}
          <div className="sm:col-span-2 py-4">
            <Button
              type="submit"
              className=" bg-[#99408b] hover:bg-[#8a3a7d] cursor-pointer text-gray-50 font-medium md:h-12 w-full text-lg"
            >
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default AppointmentForm;