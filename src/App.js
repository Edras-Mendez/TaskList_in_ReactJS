import freeCodeCamp from './imgs/Logo.png';
import TaskList from './components/taskList.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="image__container">
        <img className="freeCodeCamp__logo" 
          src={freeCodeCamp} 
          alt="Logo" />
      </div>
      <div className="main__container">
        <h1 className="main__title">Task-List</h1>
          <TaskList />
      </div>
    </div>
  );
}

export default App;
