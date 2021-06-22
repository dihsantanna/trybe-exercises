import logo from './logo.svg';
import './App.css';
import Task from './Task';

const tasks = [ 'Estudar React', 'Comer', 'Estudar React', 'Dormir', 'Estudar React', 'Acordar', 'Estudar React'];

function App() {
  return <div className='list-container'>
    <ol>{tasks.map((task) => {
    return Task(task)
  })}</ol>
  </div>
}

export default App;
