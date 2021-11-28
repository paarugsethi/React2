import styles from "./TodoItem.module.css";

function TodoList({ id, data, handleToggle}) {

    

    return (
        <div>
            {
                data.map(item =>
                    <div className={styles.taskdiv} key={item.id}>
                        <h2 style={{margin:0}}>{item.title}</h2>
                        <p>{item.description}</p>
                        {item.status ? <button
                            onClick={() => handleToggle(id)}
                            className={styles.greenButton}>DONE
                            </button> : <button
                            onClick={() => handleToggle(id)}
                            className={styles.redButton}>PENDING
                            </button>
                        }
                    </div>
                )
            }

        </div>
    )

}

export default TodoList