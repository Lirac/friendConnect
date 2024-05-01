"use client";

import React, { useState } from "react";
import { useSelector } from "react-redux";
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
import { RootState } from "@/redux/store";
import Icons from "@/components/modules/common/Icons";
import { useCreatePostMutation } from "@/redux/apiSlice";

const StatusUpdate = (): React.JSX.Element => {
  const user = useSelector((state: RootState) => state.user.user);
  const [content, setContent] = useState("");
  const [createPost, { isLoading }] = useCreatePostMutation();
  const buttonDisabled = isLoading || content === "";
  const handleSave = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    e.preventDefault();
    const authorId = user?.id || "";
    createPost({ content, authorId }).then(() => setContent(""));
  };
  return (
    <form>
      <Card>
        <CardHeader>
          <CardTitle>Update status</CardTitle>
          <CardDescription>Let your friends know {"what's"} happening around you.</CardDescription>
        </CardHeader>

        <Textarea
          onChange={(e) => setContent(e.target.value)}
          value={content}
          placeholder="Type your message here."
        />

        <CardContent></CardContent>
        <CardFooter className="border-t px-6 py-4">
          <Button disabled={buttonDisabled} type={"button"} onClick={handleSave}>
            {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
            Post
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
};

export default StatusUpdate;
