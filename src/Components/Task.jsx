import {useState} from 'react';

const Task = ({name, info, type}) => {
    const [showInfo, setShowInfo] = useState(false);
    return (
        <article>
            <div className='taskItem'>
                <h4>{name}</h4>
                <h5>{info}</h5>
                <h5>Type: {type}</h5>
            </div>
        </article>
    )
}

export default Task