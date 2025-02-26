import { useForm } from "react-hook-form";
import { useSaveBooking, useGetCustomers } from "./query";
import { useNavigate } from "react-router-dom";

function BookingForm() {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      customerId: "",
      designId: "",
      date: "",
      day: "",
      status: "pending",
    },
  });

  const { data: customers, isLoading } = useGetCustomers(); // Fetch customers
  const saveApi = useSaveBooking();
  const navigate = useNavigate();

  const submit = (formData) => {
    saveApi.mutate(formData, {
      onSuccess: (res) => {
        console.log("Booking Created Successfully:", res);
        reset();
        navigate("/admin/booking"); // Redirect after success
      },
      onError: (error) => console.error("Creation Error:", error),
    });
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <label>Customer</label>
        {isLoading ? (
          <p>Loading customers...</p>
        ) : (
          <select {...register("customerId")} required>
            <option value="">Select a Customer</option>
            {customers?.map((customer) => (
              <option key={customer.id} value={customer.id}>
                {customer.name}
              </option>
            ))}
          </select>
        )}
      </div>

      <div>
        <label>Design ID</label>
        <input type="number" {...register("designId")} required />
      </div>

      <div>
        <label>Date</label>
        <input type="date" {...register("date")} required />
      </div>

      <div>
        <label>Day</label>
        <input type="text" {...register("day")} required />
      </div>

      <div>
        <label>Status</label>
        <select {...register("status")} required>
          <option value="pending">Pending</option>
          <option value="confirmed">Confirmed</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      <div>
        <input type="submit" value="Create Booking" />
      </div>
    </form>
  );
}

export default BookingForm;
