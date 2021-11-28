import { useState } from "react";
import ListTodoInput from "./TodoInput";
import TodoList from "./TodoList";
import styles from "./TodoItem.module.css";

function Todo() {
    const [list, setList] = useState([]);
    const [showCompleted, setShowCompleted] = useState(false);
    // const [page, setPage] = useState(1);

    const handleSubmit = ({title, description}) => {
        const payload = {
            id: list.length - 1,
            title,
            description,
            status: false
        };
        setList([...list, payload]);
    }

    // const changePageTo = (num) => {
    //     if (num <= 1){
    //         setPage(1);
    //         return;
    //     }
    //     setPage(num);
    // }

    // console.log(list)

    const handleToggle = (id) => {
        const updatedList = list.map(item => item.id === id ? {...item, status: !item.status} : item)
        setList(updatedList);
    }

    console.log(list)

    // const perPage = 2;
    // const filteredResults = list.filter((_,i) => i >= page - 1 * perPage  && i < page * perPage )

    return (
        <div className={styles.taskDiv}>
            <ListTodoInput onSubmit={handleSubmit}/>
            
            <TodoList  handleToggle={handleToggle} data={list.filter((item) => !item.status)}/>
            {/* <TodoList data={filteredResults}/> */}
            <div>
                <button className={styles.button} onClick={() => setShowCompleted(!showCompleted)}>SHOW COMPLETED</button>
            </div>
            {showCompleted && <TodoList handleToggle={handleToggle} data={list.filter((item) => item.status)}/>}
            
            {/* <div>
                <Pagination currentPage={page} onClickCallback={(page) => setPage(page)} total={5}/>
            </div> */}
        </div>
    )

}

export default Todo