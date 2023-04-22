import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const feedbackApi = createApi({
  reducerPath: 'feedbackApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://girls4girls.herokuapp.com/api/'
  }),
  endpoints: (builder) => ({
    getFeedbacks: builder.query({
      query: () => `feedback/list/feedbacks`,
    })
  })
})

export const { useGetFeedbacksQuery } = feedbackApi;
