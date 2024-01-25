const SingleTask = ({ item, removeTask }) => {
  return (
    <div className="taskItem">
      <h4>{item.name}</h4>
      <h5>{item.info}</h5>
      <button onClick={() => removeTask(item.id)}>Remove Task</button>
    </div>
  );
};

export default SingleTask;