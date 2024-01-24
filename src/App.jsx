import data from './tasks';
import SingleCategory from './Components/Category';
import { useReducer, useState, useEffect } from 'react';
import './style.css';

const dataLength = data.length;

function reducer(state, action) {
  const { type, id, taskData } = action;
  switch (type) {
    case 'remove': {
      const updatedTasks = state.filter(task => task.id !== id);
      return updatedTasks;
    }
    case 'add': {
      return [...state, taskData];
    }
    default:
      return state;
  }
}

function categoryReducer(state, action) {
  const { type, newCategory, removeCategory } = action;
  switch (type) {
    case 'addNewCategory': {
      return [...state, newCategory];
    }
    case 'removeCategory': {
      return state.filter(category => category !== removeCategory);
    }
    default:
      return state;
  }
}

const App = () => {
  const [taskName, setTaskName] = useState('');
  const [taskInfo, setTaskInfo] = useState('');
  const [taskCategory, setTaskCategory] = useState('');
  const [allTaskCategories, setAllTaskCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');
  const [tasks, dispatch] = useReducer(reducer, data);
  const [categories, dispatch2] = useReducer(categoryReducer, []);

  useEffect(() => {
    let baseList = [];
    for (let item of data) {
      baseList.push(item.type);
    }
    let taskTypeList = [...new Set(baseList)];
    setAllTaskCategories(taskTypeList);
  }, []);

  function removeTask(id) {
    dispatch({ type: 'remove', id: id });
  }

  function addTask() {
    const newTask = {
      id: dataLength + 1,
      name: taskName,
      info: taskInfo,
      type: taskCategory,
    };

    dispatch({ type: 'add', taskData: newTask });
  }

  function addCategory() {
    try {
      dispatch2({ type: 'addNewCategory', newCategory: newCategory });
      setAllTaskCategories([...allTaskCategories, newCategory]);
    } catch (error) {
      console.log(categories);
      console.log(error);
    }
  }

  function removeCategory() {
    dispatch2({ type: 'removeCategory', removeCategory: taskCategory });
    setAllTaskCategories(allTaskCategories.filter(category => category !== taskCategory));

    // Remove tasks with the selected category
    const updatedTasks = tasks.filter(task => task.type !== taskCategory);
    dispatch({ type: 'removeTasksByCategory', updatedTasks });
  }

  return (
    <main>

      {/* task list */}
      <div className="container">
        <h1 className="title">Task Manager</h1>
        <section className="taskList">
          {allTaskCategories.map(task => (
            <SingleCategory key={task} taskName={task} removeTask={removeTask} tasks={tasks}/>
          ))}
        </section>
      </div>

      {/* new task */}
      <form className='container'>
        <h1 className='title'>Add Task</h1>
        <section className='taskAdder'>
          <input
            type='text'
            className="taskInput"
            placeholder='name'
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
          <input
            type='text'
            className="taskInput"
            placeholder='info'
            value={taskInfo}
            onChange={(e) => setTaskInfo(e.target.value)}
          />
          <select
            className="taskInput"
            value={taskCategory}
            onChange={(e) => setTaskCategory(e.target.value)}
          >
            <option value="" disabled hidden>
              Select Category
            </option>
            {allTaskCategories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <button type='button' onClick={addTask}>Add Task</button>
        </section>
      </form>

      {/* new category */}
      <form className='container'>
        <section className='categoryAdder'>
          <h1 className='title'>Add Category</h1>
          <input
            type='text'
            className="taskInput"
            placeholder='category'
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
          />
          <button type='button' onClick={addCategory}>Add Category</button>
        </section>
      </form>

      {/* remove category */}
      <form className='container'>
        <h1 className='title'>Remove Category</h1>
        <section className='taskAdder'>
          <select
            className="taskInput"
            value={taskCategory}
            onChange={(e) => setTaskCategory(e.target.value)}
          >
            <option value="" disabled hidden>
              Select Category
            </option>
            {allTaskCategories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <button type='button' onClick={removeCategory}>Remove Category</button>
        </section>
      </form>

    </main>
  );
};

export default App;
