import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetUsers = () => {
  return useQuery({
    queryKey: ["GET_USER_LIST"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:8080/api/auth/users");
      return response.data;
    },
  });
};

export const useGetUserById = (id) => {
  return useQuery({
    queryKey: ["GET_USER_BY_ID", id],
    queryFn: async () => {
      const response = await axios.get(`http://localhost:8080/api/auth/user/${id}`);
      return response.data;
    },
    enabled: !!id,
  });
};

export const useSaveUser = () => {
  return useMutation({
    mutationKey: "SAVE_USER_DATA",
    mutationFn: (data) => {
      return axios.post("http://localhost:8080/api/auth/register", data);
    },
  });
};

export const useUpdateUser = () => {
  return useMutation({
    mutationKey: "UPDATE_USER_DATA",
    mutationFn: ({ id, data }) => {
      return axios.put(`http://localhost:8080/api/auth/user/${id}`, data);
    },
  });
};

export const useDeleteUser = () => {
  return useMutation({
    mutationKey: "DELETE_USER_DATA",
    mutationFn: (id) => {
      return axios.delete(`http://localhost:8080/api/auth/user/${id}`);
    },
  });
};