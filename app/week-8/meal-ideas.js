"use client";

import React, { useEffect, useState } from 'react';

const fetchMealIdeas = async (ingredient) => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    return data.meals || []; 
  } catch (error) {
    console.error("Error fetching meal ideas:", error);
    return [];
  }
};

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]); 

  const loadMealIdeas = async () => {
    const fetchedMeals = await fetchMealIdeas(ingredient);
    setMeals(fetchedMeals); 
  };

  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
    }
  }, [ingredient]);

  return (
    <div>
      <h3 class="text-xl font-bold">Meal Ideas</h3>
        
          {meals.length > 0 ? (
            <div>
            <p>Here are some meal ideas using {ingredient}:</p>
            <ul>
            {meals.map((meal) => (
              <li key={meal.idMeal} className="p-2 m-1 bg-slate-900 max-w-sm hover:bg-orange-800 cursor-pointer">{meal.strMeal}</li>
            ))}
          </ul>
          </div>
      ) : (
        <p>No meal ideas found for {ingredient}</p>
      )}
    </div>
  );
};

export default MealIdeas;
