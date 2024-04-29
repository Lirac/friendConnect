import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

type friendRequestProps = {
  requests: {
    name: string;
    userId: string;
    connections: number;
  }[];
};
const FriendList = ({ requests }: friendRequestProps): React.JSX.Element => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>
          <div className="flex justify-between">
            <h3>Friend requests</h3>
            <p className="text-sm text-muted-foreground">See all</p>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex flex-col">
          {requests.map((request, index) => (
            <div
              key={index}
              className="flex gap-4 p-2 cursor-pointer hover:bg-slate-100 rounded-2xl"
            >
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col justify-center">
                <p className="text-sm font-semibold leading-none">{request.name}</p>
                <p className="text-xs text-muted-foreground">{request.connections} connections</p>
                <div className="flex gap-2 mt-2">
                  <Button size={"sm"} className="w-1/2">
                    Confirm
                  </Button>
                  <Button size={"sm"} className="w-1/2" variant={"outline"}>
                    Delete
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

export default FriendList;
