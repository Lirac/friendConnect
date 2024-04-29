import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type friendListProps = {
  friends: {
    name: string;
    active: number;
    displayPictureUrl?: string;
  }[];
};
const FriendList = ({ friends }: friendListProps): React.JSX.Element => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>
          <div className="flex justify-between">
            <h3>Friends</h3>
            <p className="text-sm text-muted-foreground">See all</p>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex flex-col">
          {friends.map((friend, index) => (
            <div
              key={index}
              className="flex gap-4 p-2 cursor-pointer items-center hover:bg-slate-100 rounded-2xl"
            >
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col justify-center">
                <p className="text-sm font-semibold leading-none">{friend.name}</p>
                <p className="text-xs text-muted-foreground">{friend.active} min ago</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default FriendList;
