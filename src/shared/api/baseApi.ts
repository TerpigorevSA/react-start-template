import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getTokenFromLocalStorage } from '../lib/localStorage';

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://19429ba06ff2.vps.myjino.ru/api',
    prepareHeaders: (headers) => {
      const token = getTokenFromLocalStorage();
      if (token) {
        headers.set('Auyhorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
});
