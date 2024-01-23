import data from './tasks';
import SingleTask from './Components/Task';
import {useReducer} from 'react';
import './style.css'

function reducer(action, id, state) {
  const {type} = action
    switch(type) {
        case 'remove':{
          const updatedTasks = state.filter(task => task.id !== id);
          return updatedTasks;
        }
        default: return state
    }
}

const App = () => {
  const [tasks, dispatch] = useReducer(reducer, data);

  function removeTask(id) {
    dispatch({ type: 'remove', id: id});
  }

  return (
    <main>
      <div className="container">
        <h1 className='title'>Task Manager</h1>
        <section className="taskList">
          {tasks.map(question=>{
            return <SingleTask key={question.id} {...question} removeTask={removeTask}/>
          })}
        </section>
      </div>
    </main>
  )
}

export default App