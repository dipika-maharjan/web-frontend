import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetList = () => {
  return useQuery({
    queryKey: ["GET_DESIGN_LIST"], // Should be an array
    queryFn: async () => {
      const response = await axios.get("http://localhost:8080/api/design/view_design");
      return response.data; // Returning only the actual data 
    },
  });
};

export const useGetById = (id) => {
  return useQuery({
    queryKey: ["GET_DESIGN_BY_ID"], // Should be an array
    queryFn: async () => {
      const response = await axios.get("http://localhost:8080/api/design/"+id);
      return response.data; // Returning only the actual data 
    },
    enabled:!!id
  });
};

export const useSaveDesign = () => {
  return useMutation({
    mutationKey:"SAVE_DESIGN_DATA",
    mutationFn:(data)=>{
      return axios.post("http://localhost:8080/api/design/create_design",data)
    }
  })
}

export const useUpdateDesign = () => {
  return useMutation({
    mutationKey: "UPDATE_DESIGN_DATA",
    mutationFn: ({ id, formData }) => {
      if (!id) {
        throw new Error("ID is required for updating a design");
      }
      return axios.put(`http://localhost:8080/api/design/${id}`, formData);
    },
  });
};


export const useDeleteDesign = () =>{
  return useMutation({
    mutationKey:"DELETE_DESIGN_DATA",
    mutationFn:(id)=>{
      return axios.delete("http://localhost:8080/api/design/"+id)
    }
  })
}
