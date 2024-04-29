import React from "react";
import TopNav from "@/components/modules/dashboard/TopNav";

const layout = ({ children }: { children: React.ReactNode }): React.JSX.Element => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <TopNav />
      <div className="px-4 py-6 md:px-12">{children}</div>
    </div>
  );
};
export default layout;
