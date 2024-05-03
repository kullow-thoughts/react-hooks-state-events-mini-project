import React from "react";

function CategoryFilter({ onSelectCategory, selectedCategory }) {
  // Define an array of categories
  const categories = ["All", "Code", "Food", "Money", "Misc"];

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* Map over the categories array */}
      {categories.map((category) => (
        // Render a button element for each category
        <button
          key={category}
          // Call the onSelectCategory function with the current category as an argument when the button is clicked
          onClick={() => onSelectCategory(category)}
          // Add the "selected" class to the button if the selectedCategory is equal to the current category
          className={selectedCategory === category ? "selected" : ""}
        >
          {/* Display the category name */}
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;