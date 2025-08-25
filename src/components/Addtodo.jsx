import { useState } from "react"

const AddTodoForm = (probs) => {
    const ArrayAct = probs.ArrayAct
    const setArrayAct = probs.setArrayAct

    const[newActivity,setNewActivity]=useState("")

    const handleChange = (evt)=>
    {
        setNewActivity(evt.target.value)

    }

    const handleAdd = ()=>
    {
        setArrayAct([...ArrayAct,{id:ArrayAct.length+1,activity:newActivity}])
        setNewActivity("")
    }
    return (
        <>
            <div className="activity" id="activity">

                <h2>Manage Activities</h2>
                <div className="input" id="input">
                    <input value={newActivity} onChange={handleChange} type="text" className="act" id="act" placeholder="Next Activity?" />
                    <button onClick={handleAdd} className="add" id="add">Add</button>
                </div>
            </div>
        </>

    )
}

export default AddTodoForm