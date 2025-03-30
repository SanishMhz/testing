"use client";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Textarea } from "@/components/ui/textarea";
// import { usePostContactMutation } from "@/store/apiSlice";
import toast from "react-hot-toast";

const contactFormSchema = z.object({
  firstName: z
    .string()
    .min(3, "First name must be at least 3 characters")
    .max(50),
  lastName: z.string().min(3, "Last name must be at least 3 character").max(50),
  contact: z
    .string()
    .length(10, "Contact must be exactly 10 digits")
    .regex(/^\d+$/, "Contact must contain only numbers"),
  email: z
    .string()
    .min(2, { message: "Email is required" })
    .email({ message: "Invalid email address" })
    .trim(),
  description: z
    .string()
    .min(1, { message: "Message is required" })
    .max(500, { message: "Message should not exceed 500 characters." }),
});

const ContactUs = () => {
  // const [postContact] = usePostContactMutation();
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      contact: "",
      email: "",
      description: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof contactFormSchema>) => {
    // const response = await postContact({
    //   first_name: values.firstName,
    //   last_name: values.lastName,
    //   email: values.email,
    //   message: values.description,
    //   contact_number: values.contact,
    // });
    // if (response?.data) {
    //   toast.success("Your message sent successfully, Thank you");
    // } else {
    //   toast.error(
    //     "Failed to send your message, please try again later. Thank you"
    //   );
    // }
    console.log("values", values);
    form.reset();
  };
  return (
    <div className="flex flex-col gap-4 items-start w-full">
      <div className="w-full p-4 md:p-8 lg:p-12 bg-white rounded-lg text-gray-700">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormLabel className="sm:text-base">First Name</FormLabel>
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
                  <FormLabel className="sm:text-base">Last Name</FormLabel>
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
                  <FormLabel className="sm:text-base">Contact Number</FormLabel>
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
                  <FormLabel className="sm:text-base">Email Address</FormLabel>
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
            {/* Text Area for Message and Enquiry */}
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="sm:col-span-2 space-y-1">
                  <FormLabel className="sm:text-base">
                    Message or Enquiry
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Type your message here."
                      {...field}
                      className="w-full h-36"
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
                className="bg-[#99408b] hover:bg-[#8a3a7d] text-white text-lg cursor-pointer"
              >
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};
export default ContactUs;
