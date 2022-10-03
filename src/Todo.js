import React from 'react';
import {observer} from "mobx-react-lite";
import todo from "./store/todo";

const Todo = observer(() => {

  console.log('render')
  return (
    <div>
      <button onClick={() => todo.fetchTodo()}>Fetch todos</button>
      {todo.todos.map(item =>
        <div key={item.id}>
          <input type='checkbox' checked={item.completed} onChange={() => todo.completeTodo(item.id)}/>
          {item.title}
          <button onClick={() => todo.removeTodo(item.id)}>x</button>
        </div>
      )}
    </div>
  );
})

export default Todo;
