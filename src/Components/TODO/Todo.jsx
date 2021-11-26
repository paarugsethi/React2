import { useState } from "react";
import TodoInput from "./Todoinput";
import TodoItem from "./TodoItem";

const Todo = () => {
    const [todos, setTodos] = useState([
        // {
        //     id: 1,
        //     title: "DEFAULT",
        //     status: false
        // }
    ]);
    const handleTaskCreate = (title) => {
        const payload = {
            title: title,
            status: false,
            id: todos.length + 1
        };
        setTodos([...todos, payload]);
    };

    // TOGGLE FUNCTION
    const handleToggle = (id) => {
        const updatedTodos = todos.map(item => item.id === id ? {...item, status: !item.status} : item)
        setTodos(updatedTodos);
    }

    // DELETE FUNCTION
    const handleDelete = (id) => {
        setTodos(todos.filter(item => item.id !== id))};

    return (
        <>
            {/* Todo Input */}
            <TodoInput onTaskCreate={handleTaskCreate}/>
            {/* List of Items */}
            {todos.map((todo) => {
                return <TodoItem 
                id={todo.id} 
                key={todo.id} 
                title={todo.title} 
                status={todo.status} 
                handleDelete={handleDelete}
                handleToggle={handleToggle}
                />
            })}
            
        </>
    )
}

export default Todo;