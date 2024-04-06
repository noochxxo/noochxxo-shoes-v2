declare type ProductType = {
  id: string
  price: string;
  salePrice: string;
  salePrecent: string;
  title: string;
  liked: boolean
  rating: number
  userRatingCount: number
  urlBase: string
}

declare type ProductRowType = {
  title: string;
  description: string;
}