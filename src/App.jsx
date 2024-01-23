import data from './tasks';
import SingleTask from './Components/Task';
import {useState} from 'react';
import './style.css'

const App = () => {
  const [tasks, setTasks] = useState(data);
  return (
    <main>
      <div className="container">
        <h1 className='title'>Task Manager</h1>
        <section className="taskList">
          {tasks.map(question=>{
            return <SingleTask key={question.id} {...question}/>
          })}
        </section>
      </div>
    </main>
  )
}

export default App