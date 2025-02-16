import React, { useState } from 'react';

function InputForm({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Ask for saffron-based dishes..."
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default InputForm;
