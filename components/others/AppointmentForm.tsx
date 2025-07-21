"use client";
import {
  Form,
  FormControl,
  FormDescription,
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
import { Button } from "../ui/button";
import { timePeriods } from "@/constants";
import {
  useGetServicesQuery,
  useSubmitBookingMutation,
} from "@/store/apiSlice";
import { Checkbox } from "@/components/ui/checkbox";
import { useDispatch } from "react-redux";
import { removeUser } from "@/store/userSlice";
import { useGetUserProfileQuery } from "@/store/userApi";
import toast from "react-hot-toast";

type ServiceTitle = { id: number; title: string };
const AppointmentForm = () => {
  const token = localStorage.getItem("user");
  const [bookSubmit] = useSubmitBookingMutation();
  const { data: user } = useGetUserProfileQuery(token ? JSON.parse(token) : "");
  const dispatch = useDispatch();
  const { data: service } = useGetServicesQuery();

  const serviceTitleList: ServiceTitle[] | undefined = service?.data.map(
    (item: ServiceData) => ({
      id: item.id,
      title: item.title,
    })
  );
  console.log(serviceTitleList);
  const bookingFormSchema = z.object({
    name: z.string(),
    contact: z.string(),
    email: z.string(),
    services: z
      .array(z.number()) // ← change from string to number
      .refine((value) => value.length > 0, {
        message: "You have to select at least one service.",
      }),
    time_period: z.string(),
  });

  const form = useForm<z.infer<typeof bookingFormSchema>>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      name: "",
      contact: "",
      email: "",
      services: [],
      time_period: "",
    },
  });

  async function onSubmit(values: z.infer<typeof bookingFormSchema>) {
    if (!token) {
      dispatch(removeUser());
    }
    try {
      await bookSubmit({
        services: values.services,
        token: token ? JSON.parse(token) : "",
        time_period: values.time_period,
      });
      toast.success("Booking Succesfull");
      form.reset();
    } catch (error) {
      console.log(error);
      toast.error("Please Try Again");
    }
  }

  return (
    <div className="text-gray-950 ">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-5"
        >
          <FormField
            control={form.control}
            name="name"
            render={({}) => (
              <FormItem className="space-y-1">
                <FormLabel className="sm:text-lg">First Name</FormLabel>
                <FormControl>
                  <Input value={user?.name || ""} readOnly className="w-full" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="contact"
            render={({}) => (
              <FormItem className="space-y-1">
                <FormLabel className="sm:text-lg">Contact Number</FormLabel>
                <FormControl>
                  <Input
                    value={user?.phone || ""}
                    readOnly
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
            render={({}) => (
              <FormItem className="space-y-1">
                <FormLabel className="sm:text-lg">Email Address</FormLabel>
                <FormControl>
                  <Input
                    value={user?.email || ""}
                    readOnly
                    className="w-full"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="services"
            render={({ field }) => (
              <FormItem>
                <div className="mb-4">
                  <FormLabel className="text-base">Services</FormLabel>
                  <FormDescription>
                    You can select one or more services
                  </FormDescription>
                </div>
                {serviceTitleList?.map((item: ServiceTitle) => (
                  <FormItem key={item.id} className="flex items-center gap-2">
                    <FormControl>
                      <Checkbox
                        checked={field.value?.includes(item.id)}
                        onCheckedChange={(checked: boolean) => {
                          if (checked) {
                            field.onChange([...field.value, item.id]);
                          } else {
                            field.onChange(
                              field.value.filter((val) => val !== item.id)
                            );
                          }
                        }}
                      />
                    </FormControl>
                    <FormLabel className="text-base font-normal">
                      {item.title}
                    </FormLabel>
                  </FormItem>
                ))}
                <FormMessage />
              </FormItem>
            )}
          />

          {/* time period */}
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
                      {timePeriods.map((item, index) => (
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
