import { useState } from "react"
import AddTodoForm from "./Addtodo"
import TodoList from "./todolist"


const TodoContainer = ()=> {

    const [ArrayAct, setArrayAct] = useState([
        

    ])
    return (
        <>
            <div className="todo-container">
                <AddTodoForm ArrayAct={ArrayAct} setArrayAct={setArrayAct}/>
                <TodoList ArrayAct={ArrayAct} setArrayAct={setArrayAct}/>
            </div>
        </>
    )
}
export default TodoContainer