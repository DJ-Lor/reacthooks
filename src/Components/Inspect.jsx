


export default function Inspect({ inspect, index, markInspect, deleteInspect }) {
    return (
      <div className="inspect">
        <span style={{ textDecoration: inspect.isDone ? "color: grey" : "" }}>{inspect.text}</span>
        <div>
          <button onClick={() => markInspect(index)}>✓</button>{' '}
          <button onClick={() => deleteInspect(index)}>✕</button>
        </div>
      </div>
    );
  }