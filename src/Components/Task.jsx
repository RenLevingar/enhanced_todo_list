const Task = ({name, info, type}) => {
    return (
        <article>
            <div className='taskItem'>
                <h4>{name}</h4>
                <h5>{info}</h5>
                <h5 className="taskType">Category: {type}</h5>
            </div>
        </article>
    )
}

export default Task