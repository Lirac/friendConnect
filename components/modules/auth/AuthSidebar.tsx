import React from "react";

const BaseSidebar = ({ children }: { children?: React.ReactNode }): React.JSX.Element => {
  return (
    <div className="flex flex-col pl-[76px] bg-[#F5F7F2]">
      <div className="max-w-[302px] flex flex-col gap-y-[30px] mt-[190px]">
        <p className="text-[32px] font-medium leading-[110%]">
          Build Friendships and Increase Your Reach.
        </p>
        <p className="text-[18px] font-[400px] leading-[22.5px] text-muted-foreground">
          Super Charge Your Friend Zone, Unlock the Power of your Circle.
        </p>
        {children}
      </div>
    </div>
  );
};

export default BaseSidebar;
