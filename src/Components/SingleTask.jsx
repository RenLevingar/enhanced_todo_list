const SingleTask = (items, removeTask) => {
  return (
    <div className="taskItem">
     <h4>{items.name}</h4>
     <h5>{items.info}</h5>
     <h5 className="taskType">Category: {items.type}</h5>
     <button onClick={() => removeTask(items.id)}>Remove Task</button>
    </div>
  )
}

export default SingleTask