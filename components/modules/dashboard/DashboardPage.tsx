import React from "react";
import NotificationCard from "@/components/modules/dashboard/NotificationCard";
import FriendsList from "@/components/modules/dashboard/FriendsList";
import FriendRequest from "@/components/modules/dashboard/FriendRequest";
import StatusUpdate from "@/components/modules/dashboard/StatusUpdate";
import Connect from "@/components/modules/dashboard/Connect";
import { ScrollArea } from "@/components/ui/scroll-area";
import TimelineCard from "@/components/modules/dashboard/TimelineCard";

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

const friends = [
  {
    name: "James David",
    active: 20,
  },
  {
    name: "Bush Donald",
    active: 30,
  },

  {
    name: "Michael Brooks",
    active: 2,
  },
];

const friendRequest = [
  {
    name: "John Browson",
    userId: "12234",
    connections: 10,
  },
  {
    name: "David Orstien",
    userId: "12234",
    connections: 2,
  },
];

const connects = [
  {
    name: "Jude Browson",
    userId: "12234",
    mutual: 20,
  },
  {
    name: "David Orstien",
    userId: "12234",
    mutual: 23,
  },
];
const DashboardPage = (): React.JSX.Element => {
  return (
    <div className="grid grid-cols-[1fr_2fr_1fr] gap-2.5">
      <div>
        <NotificationCard notifications={notifications} />
      </div>
      <div className="space-y-3">
        <StatusUpdate />
        <TimelineCard name="Mfoniso" time={20} />
      </div>
      <ScrollArea className="h-[600px] pb-6">
        <div className="space-y-3">
          <FriendsList friends={friends} />
          <FriendRequest requests={friendRequest} />
          <Connect connections={connects} />
        </div>
      </ScrollArea>
    </div>
  );
};

export default DashboardPage;
