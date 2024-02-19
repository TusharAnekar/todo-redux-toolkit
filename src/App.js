import "./App.css";
import { AddTodo } from "./components/AddTodo";
import { Todos } from "./components/Todos";

function App() {
  return (
    <div className="App">
      <h1>Learing redux toolkit</h1>
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
