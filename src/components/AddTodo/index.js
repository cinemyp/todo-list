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

  return (
    <div className={s.root}>
      <div className={s.content}>
        <input
          className={s.input}
          type="text"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          placeholder="Add Todo..."
        />
        <button
          onClick={handleClickAdd}
          className={cn(s.add, { [s.active]: todo !== "" })}
        >
          <AddSVG />
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
