import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const StatusCard = (): React.JSX.Element => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Update status</CardTitle>
        <CardDescription>Let your friends know {"what's"} happening around you.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <Textarea placeholder="Type your message here." />
        </form>
      </CardContent>
      <CardFooter className="border-t px-6 py-4">
        <Button size={"sm"}>Post</Button>
      </CardFooter>
    </Card>
  );
};

export default StatusCard;
