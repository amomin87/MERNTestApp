import React, { useState, useEffect } from 'react';

interface EditProps {
    itemId: string;
    onUpdate: (updatedItem: any) => void;
}

const Edit: React.FC<EditProps> = ({ itemId, onUpdate }) => {
    const [item, setItem] = useState({ name: '', description: '' });

    useEffect(() => {
        // Fetch the item details from the server using the itemId
        const fetchItem = async () => {
            const response = await fetch(`/api/items/${itemId}`);
            const data = await response.json();
            setItem(data);
        };

        fetchItem();
    }, [itemId]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setItem({ ...item, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await fetch(`/api/items/${itemId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item),
        });
        const updatedItem = await response.json();
        onUpdate(updatedItem);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" name="name" value={item.name} onChange={handleChange} required />
            </div>
            <div>
                <label>Description:</label>
                <textarea name="description" value={item.description} onChange={handleChange} required />
            </div>
            <button type="submit">Update Item</button>
        </form>
    );
};

export default Edit;