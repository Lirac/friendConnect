export type PostType = {
  id: string;
  authorId: string;
  content: string;
};

export type statusType = "idle" | "pending" | "success" | "failed";
export type initialStateType = {
  posts: PostType[];
  postStatus: statusType;
  error: string | undefined;
};
