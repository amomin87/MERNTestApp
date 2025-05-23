import React from 'react';

const Delete: React.FC<{ onDelete: (id: string) => void; id: string }> = ({ onDelete, id }) => {
    const handleDelete = () => {
        onDelete(id);
    };

    return (
        <div>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default Delete;