import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { WritableDraft } from "immer";

import { BASEURL } from "@/constants";
import { initialStateType, PostType } from "@/models/Post";

const initialState: initialStateType = {
  posts: [],
  postStatus: "idle",
  error: "",
};

export const createPost = createAsyncThunk(
  "posts/create",
  async ({ content, authorId }: Omit<PostType, "id">, { rejectWithValue }) => {
    const response = await fetch(`${BASEURL}/post`, {
      body: JSON.stringify({ content, authorId }),
      method: "POST",
    });

    if (!response.ok) {
      return rejectWithValue(response.statusText);
    }
    return response.json();
  },
);

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(createPost.pending, (state) => {
        state.postStatus = "pending";
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.postStatus = "success";
        state.posts.push(action.payload);
      })
      .addCase(createPost.rejected, (state, action) => {
        state.postStatus = "failed";
        state.error = action.payload as string;
      });
  },
});

export const getAllPost = (
  state: WritableDraft<initialStateType>,
): WritableDraft<PostType[] | null> => state.posts;
export default postSlice.reducer;
