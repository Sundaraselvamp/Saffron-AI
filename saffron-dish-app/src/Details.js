import React from 'react';

function DishDetails({ dish, details }) {
  return (
    <div>
      <h2>{dish}</h2>
      <pre>{details}</pre>
    </div>
  );
}

export default DishDetails;
