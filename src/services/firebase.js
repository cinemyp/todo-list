import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBi66MswyY_WUiiPONk9G6v6x3a7-ThjPE",
  authDomain: "todo-list-2f43d.firebaseapp.com",
  databaseURL: "https://todo-list-2f43d-default-rtdb.firebaseio.com",
  projectId: "todo-list-2f43d",
  storageBucket: "todo-list-2f43d.appspot.com",
  messagingSenderId: "184697503554",
  appId: "1:184697503554:web:1a1e20523da86de08212db",
};

firebase.initializeApp(firebaseConfig);

class Firebase {
  constructor() {
    this.fire = firebase;
    this.database = this.fire.database();
  }

  getTodoSocket = (cb) => {
    this.database.ref("todo").on("value", (snap) => {
      cb && cb(snap.val());
    });
  };

  offTodoSocket = () => {
    this.database.ref("todo").off();
  };

  postTodo = (key, todo) => {
    this.database.ref("todo/" + key).set(todo);
  };

  addTodo = (data) => {
    const newKey = this.database.ref().child("todo").push().key;
    this.database.ref("todo/" + newKey).set(data);
  };

  deleteTodo = (key) => {
    this.database.ref("todo/" + key).remove();
  };
}

export default Firebase;
