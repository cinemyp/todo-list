import { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../../context/firebaseContext";
import TodoItem from "../TodoItem";

import s from "./style.module.css";

const EMPTY_TEXT = "No todo's at now";

const TodoList = () => {
  const firebase = useContext(FirebaseContext);

  const [todos, setTodos] = useState({});

  useEffect(() => {
    firebase.getTodoSocket((todos) => {
      setTodos(todos);
    });
    return () => firebase.offTodoSocket();
  }, []);
  useEffect(() => {
    console.log("todos", todos);
  }, [todos]);
  return (
    <div className={s.root}>
      <div className={s.content}>
        {todos ? (
          Object.entries(todos).map(([key, { text, completed }], index) => (
            <TodoItem key={key} id={key} text={text} completed={completed} />
          ))
        ) : (
          <span className={s.empty}>{EMPTY_TEXT}</span>
        )}
      </div>
    </div>
  );
};

export default TodoList;
