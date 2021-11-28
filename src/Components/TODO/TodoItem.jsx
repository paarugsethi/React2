import styles from "./TodoItem.module.css"

const TodoItem = ({id, status, title, handleDelete, handleToggle}) => {
    if (status === true){
        var taskStatus = "DONE"
        var classDiv = styles.greenButton;
    }
    else{
        taskStatus = "TBD"
        classDiv = styles.redButton;
    }
    return <div className={styles.taskdiv}>
        {!status ? <h3 className={styles.task}>{`${title}`}</h3> : <h3 className={styles.taskDone}>{`${title}`}</h3>}
        <button className={styles.button} onClick={() => handleDelete(id)}>DELETE</button>
        <button className={classDiv} onClick={() => handleToggle(id)}>{taskStatus}</button>
    </div>
}

export default TodoItem