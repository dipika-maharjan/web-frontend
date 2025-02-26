import { useForm } from "react-hook-form";
import { useGetById, useSaveDesign, useUpdateDesign } from "./query"; // Ensure correct path
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function DesignForm() {
  const params = useParams();  // Get the ID from the URL
  const { data, isLoading } = useGetById(params?.id);  // Fetch design by ID
  const getById = data || {};  // Fallback to empty object to avoid undefined errors

  // Initialize form with empty values, will be updated with API data
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: "",
      description: "",
    },
    mode: "onChange",
  });

  // When data is fetched, update the form fields
  useEffect(() => {
    if (getById && getById.id) {
      console.log("Fetched Data:", getById); // Debugging
      reset({
        title: getById.title || "",
        description: getById.description || "",
      });
    }
  }, [getById, reset]); // Runs when getById updates

  const saveApi = useSaveDesign();
  const updateData = useUpdateDesign();

  const submit = (formData) => {
    console.log("Submitted Data:", formData);
    const dataToSend = new FormData();
    dataToSend.append("title", formData?.title);
    if (formData?.image?.length > 0) {
      dataToSend.append("image", formData.image[0]);
    }
    dataToSend.append("description", formData?.description);

    if (params?.id) {
      console.log("Updating Design with ID:", params.id);
      updateData.mutate(
        { id: params.id, formData: dataToSend },  // Send ID separately
        {
          onSuccess: (res) => console.log("Updated Successfully:", res),
          onError: (error) => console.error("Update Error:", error),
        }
      );
      return;
    }

    console.log("Creating New Design");
    saveApi.mutate(dataToSend, {
      onSuccess: (res) => console.log("Created Successfully:", res),
      onError: (error) => console.error("Creation Error:", error),
    });
  };

  if (isLoading) {
    return <p>Loading...</p>; // Display loading message
  }

  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label>Title</label>
          <input type="text" {...register("title")} />
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
              onError={(e) => (e.target.src = "https://via.placeholder.com/100")} // Fallback image
            />
          )}
        </div>

        <div>
          <label>Description</label>
          <input type="text" {...register("description")} />
        </div>

        <div>
          <input type="submit" />
        </div>
      </form>
    </>
  );
}

export default DesignForm;
