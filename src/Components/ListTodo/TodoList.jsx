import styles from "./TodoItem.module.css";

function TodoList({ data }) {

    return (
        <div>
            {
                data.map(item =>
                    <div className={styles.taskdiv} key={item.id}>
                        <h2 style={{margin:0}}>{item.title}</h2>
                        <p>{item.description}</p>
                        {item.status ? <p style={{color:"green"}}>DONE</p> : <p style={{color:"red"}}>PENDING</p>}
                    </div>
                )
            }

        </div>
    )

}

export default TodoList