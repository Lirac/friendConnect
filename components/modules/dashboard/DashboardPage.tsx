import React from "react";
import NotificationCard from "@/components/modules/dashboard/NotificationCard";
import FriendsList from "@/components/modules/dashboard/FriendsList";
import FriendRequest from "@/components/modules/dashboard/FriendRequest";
import StatusCard from "@/components/modules/dashboard/StatusCard";

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
const DashboardPage = (): React.JSX.Element => {
  return (
    <div className="grid grid-cols-[1fr_2fr_1fr] gap-2.5">
      <div>
        <NotificationCard notifications={notifications} />
      </div>
      <div>
        <StatusCard />
      </div>
      <div className="space-y-3">
        <FriendsList friends={friends} />
        <FriendRequest requests={friendRequest} />
      </div>
    </div>
  );
};

export default DashboardPage;
