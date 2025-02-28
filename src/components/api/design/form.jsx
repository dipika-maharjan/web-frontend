import { useForm } from "react-hook-form";
import { useSaveDesign, useUpdateDesign, useGetById } from "./query";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useMemo } from "react";
import "../../../styles/DesignForm.css";

function DesignForm() {
  const params = useParams();
  const navigate = useNavigate();

  // Debugging: Log params.id
  console.log("params.id:", params?.id);

  // Only fetch design data if params.id is valid
  const { data, isLoading } = useGetById(params?.id);
  const getById = data || {};

  // UseMemo to prevent unnecessary resets
  const defaultValues = useMemo(() => ({
    title: getById?.title || "",
    description: getById?.description || "",
  }), [getById]);

  const { register, handleSubmit, reset } = useForm({
    defaultValues, 
    mode: "onChange",
  });

  // Only reset when defaultValues change
  useEffect(() => {
    if (getById?.title && getById?.description) {
      reset(defaultValues); // Reset only when data is available
    }
  }, [defaultValues, getById, reset]);

  const saveApi = useSaveDesign();
  const updateData = useUpdateDesign();

  const submit = (formData) => {
    const dataToSend = new FormData();
    dataToSend.append("title", formData?.title);
    dataToSend.append("description", formData?.description);

    // Fix file upload handling
    if (formData?.image?.[0]) {
      dataToSend.append("image", formData.image[0]);
    }

    // If we have an ID (edit), we update the design; otherwise, we create a new design
    if (params?.id) {
      updateData.mutate(
        { id: params.id, formData: dataToSend },
        {
          onSuccess: () => {
            alert("Updated Successfully!");
            navigate("/admin/design"); // Navigate back to design list
          },
        }
      );
    } else {
      saveApi.mutate(dataToSend, {
        onSuccess: () => {
          alert("Created Successfully!");
          reset(); // Reset the form after success
          navigate("/admin/design"); // Navigate back to the design list
        },
      });
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="design-form">
      <button className="btn-back" onClick={() => navigate("/admin/design")}>
         Back to Designs
      </button>
      <form onSubmit={handleSubmit(submit)} encType="multipart/form-data">
        <div>
          <label>Title</label>
          <input type="text" {...register("title")} required />
        </div>

        <div>
          <label>Image</label>
          <input type="file" {...register("image")} />
        </div>

        <div>
          {getById?.image && (
            <img
              src={`http://localhost:8080/design_images/${getById.image}`}
              alt="Design Preview"
              height="100"
              onError={(e) => (e.target.src = "https://via.placeholder.com/100")}
            />
          )}
        </div>

        <div>
          <label>Description</label>
          <textarea {...register("description")} required />
        </div>

        <div>
          <input type="submit" value={params?.id ? "Update Design" : "Add Design"} />
        </div>
      </form>
    </div>
  );
}

export default DesignForm;