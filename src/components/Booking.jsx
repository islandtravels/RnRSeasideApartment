import React, { useState } from 'react';
import '../css/Booking.css'; 
import Page_Label from './Page_Label';

const PopUp = ({ onClose }) => {
    const handleFinalSubmit = (e) => {
        e.preventDefault();
        alert('Form submitted successfully! Please Check your inputed email inbox for our response within the next 24 hours.');
        onClose();
    };

    return (
        <div className="popup-overlay">
            <div className="popup-modal">
                <Page_Label pageLabel={"Book"} blue/>
                <br />
                <h2>Additional Information</h2>
                <br />
                <form onSubmit={handleFinalSubmit} className="popup-form">
                    <div className="form-group">
                        <label>First Name</label>
                        <input type="text" name="firstName" required />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" name="lastName" required />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label>Phone Number</label>
                        <input type="tel" name="phone" required />
                    </div>
                    <div className="form-group">
                        <label>Additional Comments</label>
                        <textarea name="comments" rows="3" />
                    </div>

                    <span><center> <i>Note: WE <b>WILL NOT</b> ACCEPT PAX OF 5 AND ABOVE. ONLY 4 GUESTS AT A TIME.</i>  </center></span>

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

    const handleFormSubmit = (e) => {
        e.preventDefault();
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

            {showPopup && <PopUp onClose={() => setShowPopup(false)} />}
        </div>
    );
};

export default Booking;
