"use client";
import Lottie from "lottie-react";
import animationData from "../public/ecommerce-circular.json";
const EcommerceCircularAnimation = () => {
  return (
    <div className="h-[400px] w-[400px] mx-auto">
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default EcommerceCircularAnimation;
