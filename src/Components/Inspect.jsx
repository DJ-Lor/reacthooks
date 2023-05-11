

export default function Inspect({ inspect, index, markInspect, deleteInspect, markPriority }) {

 
    return (
        <div className="todo">
           
            <span style={{ textDecoration: inspect.isDone ? "line-through" : "", color: inspect.highPriority ? "red" : "" }}>
                {inspect.text}</span>
            <div>
            <button variant="outline-success" onClick={() => markInspect(index)}>✓</button>{' '}
            <button variant="outline-danger" onClick={() => deleteInspect(index)}>✕</button>{' '}
            <button variant="outline-success" onClick={() => markPriority(index)}> ⚡️ </button>{' '}
            </div>
            
        </div>
    );
  }


