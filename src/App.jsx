import React, { useEffect, useState } from 'react';

function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    fetch('/api/items')
      .then(res => res.json())
      .then(setItems);
  }, []);

  const addItem = () => {
    fetch('/api/items', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ name })
    })
    .then(() => {
      setName('');
      return fetch('/api/items').then(res => res.json());
    })
    .then(setItems);
  };

  const deleteItem = (id) => {
    fetch(`/api/items/${id}`, { method: 'DELETE' })
      .then(() => fetch('/api/items').then(res => res.json()))
      .then(setItems);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>MERN CRUD App</h2>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Item name" />
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map(item => (
          <li key={item._id}>
            {item.name} <button onClick={() => deleteItem(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
