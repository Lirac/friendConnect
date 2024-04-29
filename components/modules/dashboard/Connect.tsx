import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

type connectProps = {
  connections: {
    name: string;
    userId: string;
    mutual: number;
  }[];
};
const Connect = ({ connections }: connectProps): React.JSX.Element => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>
          <div className="flex justify-between">
            <h3>New Connections</h3>
            <p className="text-sm text-muted-foreground">See all</p>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex flex-col">
          {connections.map((connect, index) => (
            <div
              key={index}
              className="flex gap-4 p-2 cursor-pointer items-center hover:bg-slate-100 rounded-2xl"
            >
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col justify-center">
                <p className="text-sm font-semibold leading-none">{connect.name}</p>
                <p className="text-xs text-muted-foreground">{connect.mutual} mutual connections</p>
                <div className="flex gap-2 mt-2">
                  <Button size={"sm"} className="w-full">
                    Add Connection
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Connect;
