import React, { useState } from 'react';
import InputForm from './Input';
import Recommendations from './Recommendations';
import DishDetails from './Details';
import axios from 'axios';

function App() {
  const [recommendations, setRecommendations] = useState([]);
  const [selectedDish, setSelectedDish] = useState(null);
  const [dishDetails, setDishDetails] = useState(null);

  const handleSearch = async (query) => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/recommendations/', { question: query });
      setRecommendations(response.data.recommendations);
      setSelectedDish(null); // Clear previous selection
      setDishDetails(null); // Clear previous details
    } catch (error) {
      console.error(error);
    }
  };

  const handleDishClick = async (dish) => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/details/', { dish });
      setSelectedDish(dish);
      setDishDetails(response.data.details);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <InputForm onSearch={handleSearch} />
      <Recommendations recommendations={recommendations} onDishClick={handleDishClick} />
      {selectedDish && dishDetails && <DishDetails dish={selectedDish} details={dishDetails} />}
    </div>
  );
}

export default App;
