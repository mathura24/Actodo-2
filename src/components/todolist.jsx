
import TodoItem from "./todoitem"


const TodoList = (probs) => {
    const ArrayAct = probs.ArrayAct
    const setArrayAct = probs.setArrayAct

    return (
        <>
            <div className="today" id="today">
                <h2 className="today" id="today">Today's Activities</h2>
                
                {ArrayAct.length===0?<p>You haven't add anything yet</p>:""
}

                
                {
                    ArrayAct.map(function (item,index) {
                        return <TodoItem id={item.id} activity={item.activity} index= {index}
                        ArrayAct = {ArrayAct} setArrayAct = {setArrayAct}/>
                    })
                }
            </div>
         </>   
    )

}
export default TodoList