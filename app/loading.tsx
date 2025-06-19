"use client";

import { IconLoader } from "@tabler/icons-react";

const LoadingPage = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <IconLoader className="size-10 animate-spin" />
    </div>
  );
};

export default LoadingPage;
