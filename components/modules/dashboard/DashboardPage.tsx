import React from "react";
import NotificationCard from "@/components/modules/dashboard/NotificationCard";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
];
const DashboardPage = (): React.JSX.Element => {
  return (
    <div className="grid grid-cols-[1fr_2fr_1fr] gap-2.5">
      <div>
        <NotificationCard notifications={notifications} />
      </div>
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Update status</CardTitle>
            <CardDescription>
              Let your friends know {"what's"} happening around you.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <Textarea placeholder="Type your message here." />
            </form>
          </CardContent>
          <CardFooter className="border-t px-6 py-4">
            <Button>Post</Button>
          </CardFooter>
        </Card>
      </div>
      <div>Div3</div>
    </div>
  );
};

export default DashboardPage;
