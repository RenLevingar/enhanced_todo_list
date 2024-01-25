import SingleTask from './SingleTask'

const Task = ({ taskName, removeTask, tasks }) => {
  const currentTasks = tasks.filter((task) => task.type === taskName);

  return (
    <article>
      <h1 className="taskCategory">{taskName}</h1>
      {/* Render SingleTask components for each task in currentTasks */}
      {currentTasks.map((item) => (
        <SingleTask key={item.id} removeTask={removeTask} item={item} />
      ))}
    </article>
  );
};

export default Task;