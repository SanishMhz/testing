type Testimonial = {
  message: string;
  author: string;
};
type ChooseCardType = {
  image: string;
  title: string;
  description: string;
};
type ServiceCardType = {
  image: string;
  title: string;
  id:number;
};

type ServiceResponse={
  totalData:number,
  next:number | null,
  previouse:number | null,
  data:ServiceData[]
}

type ServiceData={
    id:number,
    created_at:string,
    image:string,
    updated_at:string,
    title:string,
    description:string,
    includes:string,
    price30:number,
    price60:number,
    price90:number
}

type TrainingResponse={
  total_data:number,
  next:number | null,
  previous:number | null,
  data:TrainingData[]
}

type TrainingData={
  id:number,
  created_at:string,
  updated_at:string,
  title:string,
  description:string,
  image:string

}

type WhoSection={
  total_data:number,
  next:number | null,
  previouse:number | null;
  data:WhoSectionData[]
}

type WhoSectionData={
  id:number,
  created_at:string,
  updated_at:string,
  story:string,
  image:string,
  missionStatement:string,
  bg_exprience:string
}

type SuccessResponse={
  total_data:number,
  next:number | null,
  previouse:number | null;
  data:SuccessData[]
}

type SuccessData={
  id:number | string,
  image:string,
  created_at:string,
  updated_at:string,
  story:string,
  author:string
}

type ChooseResponse={
  total_data:number,
  next:number | null,
  previouse:number | null;
  data:ChooseData[]
}

type ChooseData={
  id:number,
  image:string,
  created_at:string,
  updated_at:string,
  title:string,
  description:string
}

type HomeResponse={
  total_data:number,
  next:number | null,
  previouse:number | null;
  data:HomeData[]
}
type HomeData={
  id:number,
  image:string,
  created_at:string,
  updated_at:string,
  tagline:string,
  message:string,
  cta:string
}

type PrimaryResponse={
  count:number,
  next:number | null,
  previouse:number | null
  data:PrimaryData[]
}

type PrimaryData={
  id:number,
  created_at:string,
  updated_at:string,
  phone:number,
  email:string,
  address:string,
  business_hours:string
}
type Contact = {
  message: string;
};
type ContactRequest={
  first_name:string,
  last_name:string,
  phone:string,
  email?:string,
  message:string,
}


type LoginRequest={
  email:string,
  password:string
}

type Login={
  auth_token:string
}

type RegisterRequest={
email:string,
password:string,
phone:string,
location:string,
name:string,

}

type Register={
  message:string
}
 

type BookRequest={
  services:number[],
  token:string,
  time_period:string;
}
type Book={
  message:String
}

type UserResponse={
  id:number;
  email:string;
  name:string;
  phone:string;
  location:string;
}

type SocialResponse={
  total_data:number,
  next:number | null,
  previouse:number | null
  data:PrimaryData[]
}

type SocialData={
  id:number,
  created_at:string,
  updater_at:string,
  facebook:String,
  instagram:string,
  tiktok:string
}