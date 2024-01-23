const Task = ({name, info, type, id, removeTask}) => {
    return (
        <article>
            <div className='taskItem'>
                <h4>{name}</h4>
                <h5>{info}</h5>
                <h5 className="taskType">Category: {type}</h5>
                <button onClick={()=>removeTask(id)}>Remove Task</button>
            </div>
        </article>
    )
}

export default Task