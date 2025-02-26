import { useForm } from "react-hook-form";
import { useGetUserById, useSaveUser, useUpdateUser } from "./query";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function UserForm() {
  const params = useParams();
  const navigate = useNavigate();
  const { data: user, isLoading } = useGetUserById(params?.id);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      username: "",
      password: "",
      role: "user",
    },
  });

  useEffect(() => {
    if (user) {
      reset({
        username: user.username,
        role: user.role,
        password: "", // Don't populate password
      });
    }
  }, [user, reset]);

  const saveApi = useSaveUser();
  const updateApi = useUpdateUser();

  const onSubmit = (data) => {
    if (params?.id) {
      // If password is empty, remove it from the update data
      const updateData = { ...data };
      if (!updateData.password) {
        delete updateData.password;
      }
      
      updateApi.mutate(
        { id: params.id, data: updateData },
        {
          onSuccess: () => navigate("/admin/user"),
        }
      );
    } else {
      saveApi.mutate(data, {
        onSuccess: () => navigate("/admin/user"),
      });
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">
        {params?.id ? "Edit User" : "Add New User"}
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Username</label>
          <input
            type="text"
            {...register("username", { required: "Username is required" })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          {errors.username && (
            <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            {params?.id ? "New Password (leave blank to keep current)" : "Password"}
          </label>
          <input
            type="password"
            {...register("password", { 
              required: !params?.id ? "Password is required" : false,
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters"
              }
            })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Role</label>
          <select
            {...register("role", { required: "Role is required" })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          {errors.role && (
            <p className="text-red-500 text-sm mt-1">{errors.role.message}</p>
          )}
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            {params?.id ? "Update" : "Save"}
          </button>
          <button
            type="button"
            onClick={() => navigate("/admin/user")}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default UserForm;