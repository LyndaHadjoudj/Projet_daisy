import { useRef, useEffect, useState } from "react";
import Review from "../Review";

import "./Reviews.css";

const Reviews = () => {
    const reviewsRef = useRef();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        setReviews(Array.prototype.slice.call(reviewsRef.current.children));
    }, []);

    let pos = 0;

    const setTransform = () => {
        reviews.forEach((review) => {
            review.style.setProperty(
                "transform",
                `translate3d(${-pos * review.offsetWidth}px,0,0)`
            );
        });
    };

    const prev = () => {
        pos = Math.max(pos - 1, 0);
        setTransform();
    };

    const next = () => {
        pos = Math.min(pos + 1, reviews.length - 1);
        setTransform();
    };

    return (
        <div className='reviews'>
            <div className='left-box'>
                <span>"</span>
                <div className='reviews-handler' ref={reviewsRef}>
                    <Review />
                    <Review />
                    <Review />
                </div>
                <span>"</span>
                <div className='control-buttons'>
                    <div
                        className='prev'
                        onClick={() => {
                            prev();
                        }}
                    >
                        &lt;
                    </div>
                    <div
                        className='next'
                        onClick={() => {
                            next();
                        }}
                    >
                        &gt;
                    </div>
                </div>
            </div>
            <div className='right-box'>
                <h2 className='title'>Nos clients témoignent</h2>
                <button>Plus de temoignage</button>
            </div>
        </div>
    );
};

export default Reviews;
