import { useContext, useEffect, useState } from "react";
import cn from "classnames";
import { FirebaseContext } from "../../context/firebaseContext";

import Checkbox from "../Checkbox";

import s from "./style.module.css";

const TodoItem = ({ id, text, completed }) => {
  const firebase = useContext(FirebaseContext);

  const [todo, setTodo] = useState(text);
  const [checked, setChecked] = useState(completed);

  const handleChangeTodo = (e) => {
    setTodo(e.target.value);
  };

  const handleClickComplete = () => {
    setChecked((prevState) => !prevState);
  };

  const handleEndEditing = () => {
    setTodo((prevState) => prevState.trim());

    if (todo === "") {
      deleteTodo();
    } else {
      updateTodo();
    }
  };

  const updateTodo = () => {
    firebase.postTodo(id, { text: todo, completed: checked });
  };

  const deleteTodo = () => {
    firebase.deleteTodo(id);
  };
  //setState работает асинхронно, поэтому используем useEffect
  useEffect(() => {
    if (checked) {
      const timerId = setTimeout(() => deleteTodo(), 1000);
      return () => clearTimeout(timerId);
    }
  }, [checked]);

  return (
    <div className={s.root}>
      <input
        className={cn(s.input, { [s.checked]: checked })}
        type="text"
        value={todo}
        onChange={handleChangeTodo}
        onBlur={handleEndEditing}
        disabled={checked}
      />

      <Checkbox
        id={id}
        onClickComplete={handleClickComplete}
        checked={checked}
      />
    </div>
  );
};

export default TodoItem;
