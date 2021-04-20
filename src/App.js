import { FirebaseContext } from "./context/firebaseContext";
import Firebase from "./services/firebase";

import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import "./style.module.css";

const fb = new Firebase();

const App = () => {
  return (
    <FirebaseContext.Provider value={fb}>
      <Header title="Todo List" />
      <AddTodo />
      <TodoList />
    </FirebaseContext.Provider>
  );
};

export default App;
