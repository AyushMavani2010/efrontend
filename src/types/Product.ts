export interface ProductAddRequest {
  name: string;
  price: string;
  image: string;
}

export interface ProductAddResponse {
  status: string;
  data: {
    name: string;
    price: string;
    image: string;
    _id: string;
    __v: number;
  };
}
