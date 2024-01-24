// import React, { useState } from 'react';
// import SingleTask from "./SingleTask";

const Task = ({ taskName, removeTask, tasks }) => {
  // const [taskItems, setTaskItems] = useState([]);
  return (
    <article>
      <h1 className="taskCategory">{taskName}</h1>
      {/* Render SingleTask components for each task in taskItems */}
      {/* {taskItems.map((taskItem, index) => (
        <SingleTask key={index} taskName={taskItem.name} removeTask={removeTask} tasks={tasks} />
      ))} */}
    </article>
  );
};

export default Task;
