import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todos from './components/Todos';
import { useRecoilValue } from 'recoil';
import { totalTodos } from './state/selectors/TotalTodos';

function App() {
  const totalTodoState = useRecoilValue(totalTodos)
  return (
    <div className="App">
      <h1>To-DO List</h1>
      <Todos/>
      <h3>Total Todos :{totalTodoState}</h3>
    </div>
  );
}

export default App;
