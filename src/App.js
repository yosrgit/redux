import './App.css';
import Addtask from './components/AddTask';
import { Filtre } from './components/Filtre';
import Tasklist from './components/TaskList';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
    <div className="App_container">
      <Addtask/>
      <Filtre /> 
      <Tasklist/>
     
      </div>
    </div>
  );
}

export default App;