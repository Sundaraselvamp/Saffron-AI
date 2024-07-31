import React from 'react';

function Recommendations({ recommendations, onDishClick }) {
  return (
    <div>
      <h2>Recommendations</h2>
      <ul>
        {recommendations.map((dish, index) => (
          <li key={index} onClick={() => onDishClick(dish)}>
            {dish}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Recommendations;
