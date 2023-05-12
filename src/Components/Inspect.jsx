
import { useState } from "react";

export default function Inspect({ inspect, markInspect, deleteInspect, markPriority, markEdit }) {

    const [editInspect, setEditInspect] = useState(inspect.text);
    const [isEditing, setIsEditing] = useState(false);

    const handleInputChange = (event) => {
        setEditInspect(event.target.value);
    };
  
    const handleEditSubmit = (event) => {
        event.preventDefault();
        markEdit(inspect.id, editInspect);
        setIsEditing(false);
    };

    const toggleEditing = () => {
        setIsEditing(!isEditing);
        setEditInspect(inspect.text);
    };

    return (
        <div className="todo">
            {isEditing ? (
                <form onSubmit={handleEditSubmit}>
                    <input type="text" value={editInspect} onChange={handleInputChange} />
                    <button type="submit">Save</button>
                    <button type="button" onClick={toggleEditing}>Cancel</button>
                </form>
            ) : (
                <span 
                    style={{ textDecoration: inspect.isDone ? "line-through" : "", color: inspect.highPriority ? "red" : "" }}
                    onClick={toggleEditing}
                >
                    {inspect.text}
                </span>
            )}
            <div>
                <button variant="outline-success" onClick={() => markInspect(inspect.id)}>✓</button>{' '}
                <button variant="outline-success" onClick={toggleEditing}>✍🏼</button>{' '}
                <button variant="outline-danger" onClick={() => deleteInspect(inspect.id)}>✕</button>{' '}
                <button variant="outline-success" onClick={() => markPriority(inspect.id)}> ⚡️ </button>{' '}
            </div>
        </div>
    );
}
