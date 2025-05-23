import React, { useEffect, useState } from 'react';
import axios from 'axios';

const List: React.FC = () => {
    const [items, setItems] = useState<any[]>([]);

    useEffect(() => {
        const fetchItems = async () => {
            const response = await axios.get('/api/items');
            setItems(response.data);
        };

        fetchItems();
    }, []);

    return (
        <div>
            <h2>Item List</h2>
            <ul>
                {items.map(item => (
                    <li key={item._id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default List;