import SingleTask from "./SingleTask";

const Task = ({ taskName, removeTask, tasks }) => {
  const currentTasks = tasks.filter((x) => x.type === taskName);
  return (
    <article>
      <h1 className="taskCategory">{taskName}</h1>
      {/* Render SingleTask components for each task in taskItems */}
      {currentTasks.map((item) => (
        <SingleTask key={item.type} {...item} removeTask={removeTask}/>
      ))}
    </article>
  );
};

export default Task;
