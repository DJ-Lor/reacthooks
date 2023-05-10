

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


//   function TodoList({ todos }) {
//     const highPriorityTodos = todos.filter(todo => todo.highPriority);
//     const nonPriorityTodos = todos.filter(todo => !todo.highPriority);
  
//     return (
//       <ul>
//         {highPriorityTodos.map(todo => (
//           <li key={todo.id} style={{ fontWeight: "bold" }}>
//             <Inspect
//               inspect={todo}
//               markInspect={() => markInspect(todo.id)}
//               deleteInspect={() => deleteInspect(todo.id)}
//               markPriority={() => markPriority(todo.id)}
//             />
//           </li>
//         ))}
//         {nonPriorityTodos.map(todo => (
//           <li key={todo.id}>
//             <Inspect
//               inspect={todo}
//               markInspect={() => markInspect(todo.id)}
//               deleteInspect={() => deleteInspect(todo.id)}
//               markPriority={() => markPriority(todo.id)}
//             />
//           </li>
//         ))}
//       </ul>
//     );
//   }
  