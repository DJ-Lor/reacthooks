


export default function Inspect({ inspect, index, markInspect, deleteInspect }) {
    return (
      <div className="todo">
        <span style={{ textDecoration: inspect.isDone ? "line-through" : "" }}>{inspect.text}</span>
        <div>
          <button variant="outline-success" onClick={() => markInspect(index)}>done</button>{' '}
          <button variant="outline-danger" onClick={() => deleteInspect(index)}>delete</button>
        </div>
      </div>
    );
  }


