import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../../styles/BookConsultation.css";
import bookConsult from "../../../assets/images/bookConsult.avif";

function BookConsultation() {
  const navigate = useNavigate();
  const [loggedInUserId, setLoggedInUserId] = useState(null);
  const [selectedDesignId, setSelectedDesignId] = useState(null);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      setLoggedInUserId(userId);
    } else {
      console.warn("⚠️ User ID not found in localStorage");
    }
  }, []);

  const designOptions = {
    "Rustic": 1,
    "Bohemian": 2,
    "Contemporary-Minimalist": 3,
    "Traditional": 4
  };

  const [formData, setFormData] = useState({
    full_name: "",
    contact_number: "",
    email: "",
    room: "",
    design: "",
    date: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "design") {
      const designId = designOptions[value] || null;
      setSelectedDesignId(designId);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");
    const designId = designOptions[formData.design];

    if (!userId || !designId) {
        alert("⚠️ User ID or Design ID missing. Please try again.");
        return;
    }

    const selectedDate = new Date(formData.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
        alert("⚠️ You cannot book a consultation for a past date. Please select a valid future date.");
        return;
    }

    try {
        const response = await fetch("http://localhost:8080/api/bookings/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                customerId: userId,
                designId: designId,
                fullName: formData.full_name,
                contactNumber: formData.contact_number,
                email: formData.email,
                room: formData.room,
                date: formData.date,
                description: formData.description,
            }),
        });

        const data = await response.json();

        if (response.ok) {
            alert("✅ Booking successful!");
            navigate("/dashboard");
        } else {
            alert(`❌ Booking failed: ${data.message || "Unknown error"}`);
        }
    } catch (error) {
        console.error("❌ Error booking consultation:", error);
        alert("⚠️ Something went wrong. Try again.");
    }
  };

  return (
    <div>
      <div className="bookWrapper">
        <div className="bg-image" style={{ backgroundImage: `url(${bookConsult})` }}>
          <div className="book-header">
            <h1>Tell us your story</h1>
            <h2>So we can help create your dream space.</h2>
          </div>
          <div className="bookContent">
            <form className="consultForm" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Full Name:</label>
                <input type="text" name="full_name" value={formData.full_name} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label>Contact:</label>
                <input type="text" name="contact_number" value={formData.contact_number} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label>Select by Room:</label>
                <select name="room" value={formData.room} onChange={handleChange} required>
                  <option value="">Select Room</option>
                  <option value="Living Room">Living Room</option>
                  <option value="Bed Room">Bed Room</option>
                  <option value="Dining">Dining</option>
                  <option value="Kitchen">Kitchen</option>
                  <option value="Office">Office</option>
                </select>
              </div>

              <div className="form-group">
                <label>Select by Design:</label>
                <select name="design" value={formData.design} onChange={handleChange} required>
                  <option value="">Select Design</option>
                  <option value="Rustic">Rustic</option>
                  <option value="Bohemian">Bohemian</option>
                  <option value="Contemporary-Minimalist">Contemporary-Minimalist</option>
                  <option value="Traditional">Traditional</option>
                </select>
              </div>

              <div className="form-group">
                <label>Select Date:</label>
                <input type="date" name="date" value={formData.date} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label>Description:</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Describe your preferences, themes, or any details."
                  required
                />
              </div>

              <button type="submit" className="consultBtn">Book Consultation</button>
            </form>
            <p>Get a design you'll love - guaranteed!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookConsultation;
