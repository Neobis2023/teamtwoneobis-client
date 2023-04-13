import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const questionnaireApi = createApi({
    reducerPath: 'questionnaireApi',
    baseQuery: fetchBaseQuery({
      baseUrl: 'https://girls4girls.herokuapp.com/api/'
    }),
    endpoints: (builder) => ({
      getQuestionnaires: builder.query({
        query: () => `questionnaire`,
      }),
      createQuestionnaire: builder.mutation({
        query: (questionnaire) => ({
          url: `questionnaire`,
          method: 'POST',
          body: questionnaire,
        }),
      })
    }),
  }
)

export const { useGetQuestionnairesQuery, useCreateQuestionnaireMutation } = questionnaireApi;
