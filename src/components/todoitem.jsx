const TodoItem = (probs) => {
    const ArrayAct = probs.ArrayAct
    const setArrayAct = probs.setArrayAct

    const handleDelete = (deleteId) => {

        var tempArr = ArrayAct.filter((item) => {
            if (item.id === deleteId) {
                return false
            }

            else {
                return true
            }


        })

        setArrayAct(tempArr)


    }

    return (
        <div className="todoitem" id="todoitem">
            <p>{probs.index + 1}.{probs.activity}</p>
            <button className="Delete" onClick={() => handleDelete(probs.id)}>Delete</button>
        </div>

    )
}

export default TodoItem