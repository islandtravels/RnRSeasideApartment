import React, { useState, useEffect } from 'react';
import "../css/ImageSlider.css"


const ImageSlider = ({ images, interval = 5000, classId }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [fade, setFade] = useState(true); // controls opacity animation
    const totalPages = images.length;

    const goToPage = (index) => {
        setFade(false);
        setTimeout(() => {
            setCurrentPage(index);
            setFade(true);
        }, 200); // must match CSS transition duration
    };

    const prev = () => {
        setFade(false);
        setTimeout(() => {
            setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
            setFade(true);
        }, 200);
    };

    const next = () => {
        setFade(false);
        setTimeout(() => {
            setCurrentPage((prev) => (prev + 1) % totalPages);
            setFade(true);
        }, 200);
    };

    // Auto-transition effect
    useEffect(() => {
        const timer = setInterval(() => {
            next();
        }, interval);
        return () => clearInterval(timer);
    }, [currentPage, interval]);

    return (
        <div className={`slider-container ${classId}`}>
            <div className={`slider ${fade ? 'fade-in' : 'fade-out'}`}>
                <img
                    src={images[currentPage]}
                    alt={`Slide ${currentPage + 1}`}
                    className={`slider-image ${currentPage % 2 === 0 ? 'zoom-out' : 'zoom-in'}`}
                />
                <button className="nav-button left" onClick={prev}>
                    &#10094;
                </button>
                <button className="nav-button right" onClick={next}>
                    &#10095;
                </button>
            </div>

            {/* <div className="pagination">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentPage ? 'active' : ''}`}
                        onClick={() => goToPage(index)}
                    ></span>
                ))}
            </div> */}
        </div>
    );
};

export default ImageSlider;
