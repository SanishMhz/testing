import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const USERBASE_URL=process.env.NEXT_PUBLIC_APi_USERBASE_URL

// Base Query with Headers
const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers) => {
    headers.set("Content-Type", "application/json");
    return headers;
  },
});

// Api for Service
export const serviceApi=createApi({
  reducerPath:"serviceApi",
  baseQuery,
  endpoints:(builder)=>({
    getServices:builder.query<ServiceResponse,void>({
      query:()=>({
        url:"services/",
        method:"GET"
      })
    }),
    getSericesById:builder.query<ServiceData,number>({
      query:(id)=>({
        url:`services/${id}`,
        method:"GET"
      })
    }),
  })
});
export const {useGetServicesQuery,useGetSericesByIdQuery}=serviceApi;

// Api for Training
export const trainApi=createApi({
  reducerPath:"trainApi",
  baseQuery,
  endpoints:(builder)=>({
    getTraining:builder.query<TrainingResponse,void>({
      query:()=>({
        url:"trainings/",
        method:"GET"
      })
    })
  })
})
export const {useGetTrainingQuery}=trainApi;

//For Who we Are Api

export const whoApi=createApi({
  reducerPath:"whoApi",
  baseQuery,
  endpoints:(builder)=>({
    getWhoSection:builder.query<WhoSection,void>({
        query:()=>({
          url:"whoweare/",
          method:"GET"
        })
    })
  })
})

export const {useGetWhoSectionQuery}=whoApi;

// Success Stories Api

export const successApi=createApi({
  reducerPath:"successApi",
  baseQuery,
  endpoints:(builder)=>({
    getSuccessApi:builder.query<SuccessResponse,void>({
     query:()=>({
      url:"successstories/",
      method:"GET"
     })
    })
  })
})

export const {useGetSuccessApiQuery}=successApi;

//Why Choose Us Api

export const chooseApi=createApi({
  reducerPath:"chooseApi",
  baseQuery,
  endpoints:(builder)=>({
    getChooseUs:builder.query<ChooseResponse,void>({
      query:()=>({
        url:"chooseus/"
      })
    })
  })
})

export const {useGetChooseUsQuery}=chooseApi;

// Hero Section Api
export const homeApi=createApi({
  reducerPath:"homeApi",
  baseQuery,
  endpoints:(builder)=>({
    getHomeSection:builder.query<HomeResponse,void>({
      query:()=>({
      url:"home/",
      method:"GET"
      })
      
    })
  })
})

export const {useGetHomeSectionQuery}=homeApi;


// Contact Api
export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery,
  endpoints: (builder) => ({
    submitContact: builder.mutation<Contact, ContactRequest>({
      query: (data) => ({
        url: "contactus/",
        method: "POST",
        body: data,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
    getPrimaryContact:builder.query<PrimaryResponse,void>({
      query:()=>({
        url:"primarycontact/",
        method:"GET"
      })
    }),
  }),
});

export const {useGetPrimaryContactQuery,useSubmitContactMutation}=contactApi;

// Api for Booking

export const bookApi=createApi({
  reducerPath:"bookApi",
  baseQuery,
  endpoints:(builder)=>({
    submitBooking:builder.mutation<Book,BookRequest>({
      query:({token,...data})=>({
        url:"booking/",
        method:"POST",
        body:data,
        headers: {
          "Content-Type": "application/json",
          "Authorization":`token ${token}`
        },
      })
    })
  })
})

export const {useSubmitBookingMutation}=bookApi;

// Social Media Link

export const socialApi=createApi({
  reducerPath:"socialApi",
  baseQuery,
  endpoints:(builder)=>({
    getSocialLink:builder.query<SocialData,string>({
      query:()=>({
        url:"sociallink/",
        method:"GET"
      })
    })
  })
})

export const {useGetSocialLinkQuery}=socialApi


