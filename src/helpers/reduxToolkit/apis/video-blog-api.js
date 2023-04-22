import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const authWithToken = {
  Authorization: `Bearer ${localStorage.getItem("token")}`,
};

export const videoBlogApi = createApi({
  reducerPath: 'videoBlogApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://girls4girls.herokuapp.com/api/'
  }),
  endpoints: (builder) => ({
    addToWatched: builder.mutation({
      query: (blogId) => ({
        url: `video-blog/add-to-watched?blogId=${blogId}`,
        method: 'PUT',
        headers: authWithToken,
      })
    })
  })
})

export const { useAddToWatchedMutation } = videoBlogApi;
