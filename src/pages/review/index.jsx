import React, { useState, useEffect } from 'react';
import './style.css';
const ReviewModal = ({ recipeId, onClose }) => {
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState('');

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await fetch(`http://localhost/api/review/getRevByRecId.php?recipe_id=${recipeId}`);
                const data = await response.json();
                setReviews(data);
            } catch (error) {
                console.error('Error fetching reviews:', error);
            }
        };
        fetchReviews();
    }, [recipeId]);

    return (
        <div className="modal-overlay">
            <div className="modal">
            <button className="modal-close-button" onClick={onClose}>&times;</button>
                <h2>Reviews</h2>
                {reviews.map(review => (
                    <div key={review.review_id}>
                        <h3>{review.full_name}</h3>
                        <p>Rating: {review.star}</p>
                        <p>Comment: {review.comment}</p>
                        <p>Date: {new Date(review.created_on).toLocaleDateString()}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewModal;
