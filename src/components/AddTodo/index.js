import { useContext, useState } from "react";
import cn from "classnames";
import s from "./style.module.css";
import { ReactComponent as AddSVG } from "../../assets/add.svg";
import { FirebaseContext } from "../../context/firebaseContext";

const AddTodo = () => {
  const firebase = useContext(FirebaseContext);

  const [todo, setTodo] = useState("");

  const handleClickAdd = () => {
    firebase.addTodo({ text: todo, completed: false });
    setTodo("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={s.root}>
      <form className={s.content} onSubmit={handleSubmit}>
        <input
          className={s.input}
          type="text"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          onBlur={() => {
            setTodo((prevState) => prevState.trim());
          }}
          placeholder="Add Todo..."
        />
        <button
          onClick={handleClickAdd}
          className={cn(s.add, { [s.active]: todo !== "" })}
        >
          <AddSVG />
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
