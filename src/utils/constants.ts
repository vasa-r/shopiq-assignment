import BannerOne from "@/assets/banner-one.jpg";
import BannerTwo from "@/assets/banner-two.jpg";
import BannerThree from "@/assets/banner-three.jpg";
import BannerFour from "@/assets/banner-four.jpg";
import BannerFive from "@/assets/banner-five.jpg";
import BannerSix from "@/assets/banner-six.jpg";

export const menu = [
  { id: 1, label: "Home", nav: "/" },
  { id: 2, label: "Categories", nav: "/" },
  { id: 3, label: "About", nav: "/" },
  { id: 4, label: "Contacts", nav: "/" },
];

export const carouselItems = [
  {
    id: "cwivru",
    label: "Banner One",
    img: BannerOne,
  },
  {
    id: "tmsvwx",
    label: "Banner Two",
    img: BannerTwo,
  },
  {
    id: "khzqna",
    label: "Banner Three",
    img: BannerThree,
  },
  {
    id: "nbazql",
    label: "Banner Four",
    img: BannerFour,
  },
  {
    id: "uzjhwa",
    label: "Banner Five",
    img: BannerFive,
  },
  {
    id: "vgszld",
    label: "Banner Six",
    img: BannerSix,
  },
];

export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: Meta;
  thumbnail: string;
  images: string[];
}

interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

export interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

interface Meta {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}
