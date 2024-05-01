import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASEURL } from "@/constants";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: `${BASEURL}` }),
  reducerPath: "baseApi",
  tagTypes: ["Post"],
  endpoints: (build) => ({
    getPosts: build.query({
      query: () => `/post`,
      providesTags: ["Post"],
    }),
    createPost: build.mutation({
      query: (body) => ({
        url: `/post`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Post"],
    }),
    register: build.mutation({
      query: (body) => ({
        url: `/register`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetPostsQuery, useCreatePostMutation, useRegisterMutation } = api;
