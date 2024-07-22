import { useState } from "react";



function Home(props){
    const [list,setList] = useState([])
    const [task,setTask] = useState('')

    function HandleInput(event){
       setTask(event.target.value)
       console.log(task)
       
    }
    
    function HandleAdd(){
        if (task.trim() !==''){
            setList(list=>[...list,task])
            setTask('')
            console.log(list)
        }
    }
    
    function handleDelete(index){
        const updatedTasks = list.filter((element,i)=>i!==index)
        setList(updatedTasks)

    }
    
    return(
        <div className="Mini-Main">
            <h2>Please Enter A Task</h2>
            <div className="mini">
                <input type="text" placeholder="Enter a Task" onChange={HandleInput} />
                <button className="add" onClick={()=>HandleAdd(task)}>Add</button>
            </div>
            <ol>
            {list.map((newTask,index)=>
                <li key={index}>
                    <span>{newTask}</span>
                    <button className="delete-btn" onClick={()=>handleDelete(index)}>delete</button>
                </li>
            
            )}
            </ol>
        </div>
    );
}
export default Home