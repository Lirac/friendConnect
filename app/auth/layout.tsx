import React from "react";
import type { Metadata } from "next";
import AuthSidebar from "@/components/modules/auth/AuthSidebar";

export const metadata: Metadata = {
  title: "FriendsConnect | Login",
  description: "Connect with people round the world",
};

const layout = ({ children }: { children: React.ReactNode }): React.JSX.Element => {
  return (
    <div className="grid grid-cols-[429px_1fr] w-full h-screen fixed">
      <AuthSidebar />
      <main className="px-[100px] py-[50px] relative overflow-y-auto">{children}</main>
    </div>
  );
};

export default layout;
