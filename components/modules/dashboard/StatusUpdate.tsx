"use client";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { AppDispatch, RootState } from "@/redux/store";
import Icons from "@/components/modules/common/Icons";
import { createPost } from "@/redux/post/postSlice";

const StatusUpdate = (): React.JSX.Element => {
  const user = useSelector((state: RootState) => state.user.user);
  const postStatus = useSelector((state: RootState) => state.post.postStatus);
  const [content, setContent] = useState("");
  const buttonDisabled = postStatus === "pending" || content === "";
  const dispatch = useDispatch<AppDispatch>();
  const handleSave = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    e.preventDefault();
    const authorId = user?.id || "";
    dispatch(createPost({ content, authorId })).then(() => {
      setContent("");
    });
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
            {postStatus === "pending" && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
            Post
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
};

export default StatusUpdate;
