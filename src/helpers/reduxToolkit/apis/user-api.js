import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const authWithToken = {
  Authorization: `Bearer ${localStorage.getItem("token")}`,
};

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://girls4girls.herokuapp.com/api/'
  }),
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: () => ({
        url: `user/profile`,
        headers: authWithToken,
      })
    })
  })
})

export const { useGetProfileQuery } = userApi;
