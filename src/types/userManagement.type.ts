export type TUser = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  _id: string;
  id?: string; 
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  role: "admin" | "user";
  status: "active" | "in-progress" | "blocked";
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v?: number;
  };