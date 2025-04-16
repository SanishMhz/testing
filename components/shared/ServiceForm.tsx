"use client";
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
import { Button } from "../ui/button";
import {
  useGetSericesByIdQuery,
  useSubmitBookingMutation,
} from "@/store/apiSlice";
import { useParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { timePeriods } from "@/constants";
import { useGetUserProfileQuery } from "@/store/userApi";
import { useDispatch } from "react-redux";
import { removeUser } from "@/store/userSlice";
import toast from "react-hot-toast";

const ServiceForm = () => {
  const token = localStorage.getItem("user");
  const [bookSubmit] = useSubmitBookingMutation();
  const { data: user } = useGetUserProfileQuery(token ? JSON.parse(token) : "");
  const params = useParams();
  const id = params?.id;
  const { data: service } = useGetSericesByIdQuery(Number(id));
  const dispatch = useDispatch();
  const bookingFormSchema = z.object({
    name: z.string(),
    contact: z.string(),
    email: z.string(),
    service: z.string().trim(),
    time_period: z.string().trim(),
  });
  const form = useForm<z.infer<typeof bookingFormSchema>>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      name: "",
      contact: "",
      email: "",
      service: "",
      time_period: "",
    },
  });

  async function onSubmit(values: z.infer<typeof bookingFormSchema>) {
    console.log(values);
    if (!token) {
      dispatch(removeUser());
    }
    try {
      await bookSubmit({
        services: [service ? service.id : 0],
        token: token ? JSON.parse(token) : "",
        time_period: values.time_period,
      });
      toast.success("Booking Succesfull");
      form.reset();
    } catch (error) {
      console.log(error)
      toast.error("Please Try Again");
    }
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
            name="name"
            render={() => (
              <FormItem className="space-y-1">
                <FormLabel className="sm:text-lg">First Name</FormLabel>
                <FormControl>
                  <Input value={user?.name} className="w-full" readOnly />
                  
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="contact"
            render={() => (
              <FormItem className="space-y-1">
                <FormLabel className="sm:text-lg">Contact Number</FormLabel>
                <FormControl>
                  <Input value={user?.phone} className="w-full" readOnly />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={() => (
              <FormItem className="space-y-1">
                <FormLabel className="sm:text-lg">Email Address</FormLabel>
                <FormControl>
                  <Input value={user?.email} className="w-full" readOnly/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* for grade */}
          <FormField
            control={form.control}
            name="service"
            render={() => (
              <FormItem className="sm:col-span-2 space-y-1">
                <FormLabel className="sm:text-lg">Book Your Service</FormLabel>
                <FormControl>
                  <Input
                    value={service?.title || ""}
                    readOnly
                    className="w-full bg-gray-100 cursor-not-allowed"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="time_period"
            render={({ field }) => (
              <FormItem className="sm:col-span-2 space-y-1">
                <FormLabel className="sm:text-lg">Time Period</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full border-gray-500">
                      <SelectValue placeholder="Select Time Period" />
                    </SelectTrigger>
                    <SelectContent className="bg-white overflow-auto">
                      {timePeriods.map((item,index) => (
                        <SelectItem
                          value={item}
                          key={index}
                          className="text-gray-950"
                        >
                          {item}
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

export default ServiceForm;
