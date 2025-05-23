import React, { useState } from 'react';

const Create: React.FC = () => {
    const [itemName, setItemName] = useState('');
    const [itemDescription, setItemDescription] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const newItem = { name: itemName, description: itemDescription };

        try {
            const response = await fetch('/api/items', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newItem),
            });

            if (response.ok) {
                // Handle successful creation (e.g., reset form or redirect)
                setItemName('');
                setItemDescription('');
            } else {
                // Handle error
                console.error('Failed to create item');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Item Name:</label>
                <input
                    type="text"
                    id="name"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="description">Item Description:</label>
                <textarea
                    id="description"
                    value={itemDescription}
                    onChange={(e) => setItemDescription(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Create Item</button>
        </form>
    );
};

export default Create;