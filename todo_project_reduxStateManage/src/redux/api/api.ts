import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["todo"],
  endpoints: (builder) => ({
    getTodos: builder.query({
      //   query: () => "alltodos", // Updated endpoint name
      query: (priority) => {
        const params = new URLSearchParams();
        if (priority) {
          params.append("priority", priority);
        }
        return {
          //   url: `/alltodos?priority=${priority}`,
          //   params: {priority}
          url: `/alltodos`,
          method: "GET",
          params: params,
        };
      },
      providesTags: ["todo"],
    }),
    addTodo: builder.mutation({
      query: (data) => ({
        url: "/createTask",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["todo"],
    }),

    updateTodo: builder.mutation({
      query: (options) => {
        console.log("inside base api =>", options);
        return {
          url: `/updateTask/${options.id}`,
          method: "PUT",
          body: options.data,
        };
      },
      invalidatesTags: ["todo"],
    }),

    deletTodo: builder.mutation({
      query: (id) => {
        console.log("inside base api =>", IDBCursorWithValue);
        return {
          url: `/deleteTodo/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["todo"],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeletTodoMutation,
} = baseApi;
