import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type timelineProps = {
  name: string;
  time: number;
};
const TimelineCard = ({ name, time }: timelineProps): React.JSX.Element => {
  return (
    <Card className="w-full">
      <CardContent className="grid gap-4">
        <div className="flex gap-4 p-2 items-center rounded-2xl">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold leading-none">{name}</p>
            <p className="text-xs text-muted-foreground">{time} min </p>
          </div>
        </div>
        <div>
          <p>This is a test status</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TimelineCard;
