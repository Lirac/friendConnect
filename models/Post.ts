export type PostType = {
  id: string;
  authorId: string;
  content: string;
  author: { username: string };
  createdAt: number;
};

export type statusType = "idle" | "pending" | "success" | "failed";
export type initialStateType = {
  posts: PostType[];
  postStatus: statusType;
  error: string | undefined;
};
