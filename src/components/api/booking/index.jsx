import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation

function BookingIndex() {
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/bookings/view_bookings", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!response.ok) throw new Error("Failed to fetch bookings");

      const data = await response.json();
      setBookings(data);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div className="admin-bookings">
      <h2>Booking Requests</h2>
      <table className="bookings-table">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Room</th>
            <th>Design</th>
            <th>Date</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.full_name}</td>
              <td>{booking.contact_number}</td>
              <td>{booking.email}</td>
              <td>{booking.room}</td>
              <td>{booking.design}</td>
              <td>{new Date(booking.date).toLocaleDateString()}</td>
              <td>{booking.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookingIndex;

