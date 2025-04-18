import { memo } from "react";
import './App.css'

const Todos = ({ todos, addTodo }) => {
  console.log("child render");
  return (
    <> 
    <div className="toDo">

    
      <h2>My Todos</h2>

      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}

      <button onClick={addTodo}>Add Todo</button>
    </div>
    </>
  );
};

export default memo(Todos);