import Task from './Task'
const Tasks = ({Tassk,onDelete,onToggle}) => {
    
    return (
        <>
        {Tassk.map( (task, index) =>(
        <Task key={index} task = {task} onDelete = {onDelete} onToggle = {onToggle}/>
        )
        )}
        </>
    )
}

export default Tasks
