import React, { useState } from 'react';
import '../css/Booking.css';
import Page_Label from './Page_Label';
import { formatDate } from '../helpers/formatDate';
import emailjs from "emailjs-com";

const PopUp = ({ onClose, bookingData, setBookingData }) => {
    const [localData, setLocalData] = useState(bookingData);
    const [editingField, setEditingField] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLocalData(prev => ({ ...prev, [name]: value }));
    };

    const handleFinalSubmit = (e) => {
        e.preventDefault();

        // Collect all data (popup + booking details)
        const formData = new FormData(e.target);
        const userData = {
            firstName: formData.get("firstName"),
            lastName: formData.get("lastName"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            comments: formData.get("comments"),
            checkin: formatDate(localData.checkin),
            checkout: formatDate(localData.checkout),
            guests: localData.guests,
        };

        emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

        // Send email using EmailJS
        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            userData
        )
            .then(
                (response) => {
                    alert("Booking confirmed! 🎉\nPlease check your email inbox for confirmation.");
                    setBookingData(localData);
                    onClose();
                },
                (error) => {
                    console.error("FAILED...", error);
                    alert("Something went wrong. Please try again.");
                }
            );
    };


    return (
        <div className="popup-overlay">
            <div className="popup-modal">
                <Page_Label pageLabel={"Book"} blue />
                <br />
                <h2>Additional Information</h2>
                <br />

                {/* Inline editable booking details */}
                <div className="form-group">
                    <label>Check-In</label>
                    {editingField === "checkin" ? (
                        <input
                            type="date"
                            name="checkin"
                            value={localData.checkin}
                            onChange={handleChange}
                            onBlur={() => setEditingField(null)}
                            autoFocus
                            required
                        />
                    ) : (
                        <p
                            className="editable-field"
                            onClick={() => setEditingField("checkin")}
                        >
                            {formatDate(localData.checkin)}
                        </p>
                    )}
                </div>
                <div className="form-group">
                    <label>Check-Out</label>
                    {editingField === "checkout" ? (
                        <input
                            type="date"
                            name="checkout"
                            value={localData.checkout}
                            onChange={handleChange}
                            onBlur={() => setEditingField(null)}
                            autoFocus
                            required
                        />
                    ) : (
                        <p
                            className="editable-field"
                            onClick={() => setEditingField("checkout")}
                        >
                            {formatDate(localData.checkout)}
                        </p>
                    )}
                </div>
                <div className="form-group">
                    <label>Guests</label>
                    {editingField === "guests" ? (
                        <input
                            type="number"
                            name="guests"
                            min="1"
                            max="4"
                            value={localData.guests}
                            onChange={handleChange}
                            onBlur={() => setEditingField(null)}
                            autoFocus
                            required
                        />
                    ) : (
                        <p
                            className="editable-field"
                            onClick={() => setEditingField("guests")}
                        >
                            {localData.guests}
                        </p>
                    )}
                </div>
                <br />
                <p>Click the date or guest amount to Edit Details</p>

                <br />
                <hr />
                <br />
                <form onSubmit={handleFinalSubmit} className="popup-form">
                    <div className="form-group pop_up-form">
                        <label>First Name</label>
                        <input type="text" name="firstName" required />
                    </div>
                    <div className="form-group pop_up-form">
                        <label>Last Name</label>
                        <input type="text" name="lastName" required />
                    </div>
                    <div className="form-group pop_up-form">
                        <label>Email</label>
                        <input type="email" name="email" required />
                    </div>
                    <div className="form-group pop_up-form">
                        <label>Phone Number</label>
                        <input type="tel" name="phone" required />
                    </div>
                    <div className="form-group pop_up-form">
                        <label>Additional Comments</label>
                        <textarea name="comments" rows="3" />
                    </div>

                    <span>
                        <center>
                            <i>Note: WE <b>WILL NOT</b> ACCEPT PAX OF 5 AND ABOVE. ONLY 4 GUESTS AT A TIME.</i>
                        </center>
                    </span>

                    <div className="popup-actions">
                        <button type="button" onClick={onClose} className="cancel-btn">Cancel</button>
                        <button type="submit" className="submit-btn">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};


const Booking = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [bookingData, setBookingData] = useState({});

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = {
            checkin: formData.get("checkin"),
            checkout: formData.get("checkout"),
            guests: formData.get("guests"),
        };

        setBookingData(data);
        setShowPopup(true);
    };

    return (
        <div className="booking">
            <form className="booking-form" onSubmit={handleFormSubmit}>
                <div className="form-group">
                    <label htmlFor="checkin">Check-In</label>
                    <input type="date" id="checkin" name="checkin" required />
                </div>

                <div className="form-group">
                    <label htmlFor="checkout">Check-Out</label>
                    <input type="date" id="checkout" name="checkout" required />
                </div>

                <div className="form-group">
                    <label htmlFor="guests">Guests (MAXIMUM OF 4)</label>
                    <input type="number" id="guests" name="guests" min="1" max="4" required />
                </div>

                <button type="submit" className="book-button">Book Now</button>
            </form>

            {showPopup && (
                <PopUp
                    bookingData={bookingData}
                    setBookingData={setBookingData}
                    onClose={() => setShowPopup(false)}
                />
            )}
        </div>
    );
};

export default Booking;
