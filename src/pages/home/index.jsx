import "./style.css";
import ReviewModal from "../review";
import React, { useState, useEffect } from "react";

const Home =() => {
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState('');
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await fetch('http://localhost/api/recipe/readAll.php'); 
                const data = await response.json();
                if (data.message) {
                    setError(data.message);
                } else {
                    setRecipes(data);
                }
            } catch (error) {
                setError('Failed to fetch recipes. Please try again later.');
                console.error('Error fetching recipes:', error);
            }
        };
        fetchRecipes();
    }, []);

    const handleReviewClick = (recipeId) => {
        setSelectedRecipe(recipeId);
    };
    if (error) {
        return <p>{error}</p>;
    }
    return (
        <div>
            <h1>Recipes</h1>
            {recipes.length > 0 ? (
                recipes.map(recipe => (
                    <div key={recipe.recipe_id} className="recipe">
                        <h2>{recipe.recipe_name}</h2>
                        <p>Created by: {recipe.created_by}</p>
                        <p>Description: {recipe.recipe_desc}</p>
                        <h3>Ingredients</h3>
                        <ul>
                            {recipe.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                        <button onClick={() => handleReviewClick(recipe.recipe_id)}>View Reviews</button>
                    </div>
                ))
            ) : (
                <p>No recipes found.</p>
            )}
            {selectedRecipe && <ReviewModal recipeId={selectedRecipe} onClose={() => setSelectedRecipe(null)} />}
        </div>
    );
};

export default Home;