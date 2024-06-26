import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type notificationCardProps = {
  notifications: {
    title: string;
    description: string;
  }[];
};
const NotificationCard = ({ notifications }: notificationCardProps): React.JSX.Element => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>
          <div className="flex justify-between">
            <h3>Notifications</h3>
            <p className="text-sm text-muted-foreground">See all</p>
          </div>
        </CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div>
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">{notification.title}</p>
                <p className="text-sm text-muted-foreground">{notification.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default NotificationCard;
