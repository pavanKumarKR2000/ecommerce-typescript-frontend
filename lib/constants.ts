import {
  IconArmchair2,
  IconBabyCarriage,
  IconBallBaseball,
  IconBook,
  IconBrandGoogleFit,
  IconBriefcase2,
  IconBrush,
  IconBurger,
  IconCar,
  IconCat,
  IconConfetti,
  IconCurrencyRupee,
  IconDeviceWatch,
  IconDiamond,
  IconHeadphones,
  IconHeadset,
  IconHome,
  IconHorseToy,
  IconPencil,
  IconPerfume,
  IconReceiptRupee,
  IconShirt,
  IconTool,
  IconTruckDelivery,
} from "@tabler/icons-react";

export const PRODUCT_CATEGORIES = [
  { id: 1, name: "Electronics", icon: IconHeadphones },
  { id: 2, name: "Fashion", icon: IconShirt },
  { id: 3, name: "Home & Garden", icon: IconHome },
  { id: 4, name: "Beauty & Personal Care", icon: IconPerfume },
  { id: 5, name: "Toys & Games", icon: IconHorseToy },
  { id: 6, name: "Sports & Outdoors", icon: IconBallBaseball },
  { id: 7, name: "Automotive", icon: IconCar },
  { id: 8, name: "Health & Wellness", icon: IconBrandGoogleFit },
  { id: 9, name: "Books, Movies & Music", icon: IconBook },
  { id: 10, name: "Office Supplies", icon: IconPencil },
  { id: 11, name: "Pet Supplies", icon: IconCat },
  { id: 12, name: "Jewelry & Accessories", icon: IconDiamond },
  { id: 13, name: "Grocery & Gourmet Food", icon: IconBurger },
  { id: 14, name: "Baby Products", icon: IconBabyCarriage },
  { id: 15, name: "Tools & Home Improvement", icon: IconTool },
  { id: 16, name: "Furniture", icon: IconArmchair2 },
  { id: 17, name: "Party Supplies", icon: IconConfetti },
  { id: 18, name: "Watches", icon: IconDeviceWatch },
  { id: 19, name: "Luggage & Bags", icon: IconBriefcase2 },
  { id: 20, name: "Art & Craft Supplies", icon: IconBrush },
];

export const AUTH_ROUTES = ["/sign-in", "/sign-up"];
export const PROTECTED_ROUTES = ["/user/profile", "/user/order", "/cart"];
export const MODE_INFO = {
  add: {
    title: "Add product",
    pendingTitle: "Adding product...",
  },
  update: {
    title: "Update product",
    pendingTitle: "Updating product...",
  },
};

export const FEATURES = [
  {
    id: 1,
    icon: IconTruckDelivery,
    feature: "Free Shipping",
    description: "Free shipping on orders above ₹500",
  },
  {
    id: 2,
    icon: IconCurrencyRupee,
    feature: "Money Back Guarantee",
    description: "Within 30 days of purchase",
  },
  {
    id: 3,
    icon: IconReceiptRupee,
    feature: "Flexible Payment",
    description: "Pay with credit card or COD",
  },
  {
    id: 4,
    icon: IconHeadset,
    feature: "24/7 Support",
    description: "Get support at any time",
  },
];
