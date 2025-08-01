import React from 'react'

const Booking = () => {
    return (
        <div className="booking">
            <form className="booking-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                    <label htmlFor="checkin">Check-In</label>
                    <input type="date" id="checkin" name="checkin" required />
                </div>

                <div className="form-group">
                    <label htmlFor="checkout">Check-Out</label>
                    <input type="date" id="checkout" name="checkout" required />
                </div>

                <div className="form-group">
                    <label htmlFor="guests">Guests</label>
                    <input type="number" id="guests" name="guests" min="1" max="10" required />
                </div>

                <button type="submit" className="book-button">Book Now</button>
            </form>
        </div>
    )
}

export default Booking