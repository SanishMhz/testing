"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { useSubmitContactMutation } from "@/store/apiSlice";
import toast from "react-hot-toast";
const formSchema = z.object({
  name: z
    .string()
    .min(3, "First name must be at least 3 characters")
    .max(50),
  last_name: z
    .string()
    .min(3, "Last name must be at least 3 character")
    .max(50),
  phone: z.string().min(10).max(10, {
    message: "Phone number must be exact 10 digit",
  }),
  message: z.string(),
});
const GetInTouchForm = () => {
  const [submitContact] = useSubmitContactMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      last_name: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("get in touch")
   try {
    await submitContact({
      first_name: values.name,
      last_name: "",
      phone: values.phone,
      message: values.message,
    }).unwrap();
    toast.success("Thank You For get in touch with us.")
    form.reset()
   } catch (error) {
    console.log(error)
    toast.error("Something went wrong.Please Try Again!!")
    
   }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Phone number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea placeholder="Hi there, how are you?" {...field} className="w-60" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="bg-white hover:bg-gray-100 text-[#361631] font-semibold" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default GetInTouchForm;
