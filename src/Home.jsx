import { useState,useEffect } from "react";
import { json } from "react-router-dom";



function Home(props){
    const [list,setList] = useState([])
    //const [newARR,setNewARR] = useState(null)
    const [task,setTask] = useState('')
    const [searchedItem,setSearchItem ] = useState('')
    const [edited,setEdited] = useState('')
    
    //using use effect
    useEffect(
        ()=>{
            setList(JSON.parse(localStorage.getItem('NewTask')))
        }, []
    )

    function HandleInput(event){
       setTask(event.target.value)
       setSearchItem(event.target.value)
       console.log(task)
       
    }
    // search function
    function handleSearch(){
        //console.log(searchedItem)
        const searchArray = list.filter(item =>item.includes(searchedItem.toLocaleLowerCase()))
        setList(searchArray)
        //console.log(searchArray)

    }
    // Edit and update funtion😭
    function handleEdit(newtask,index){
        const EditedList = [...list];
        EditedList[index] = newtask;
        setList(EditedList)

    }
    //add to list/array function
    function HandleAdd(){
        let newArr;

        if (task.trim() !==''){
            newArr = [...list,task]
            // setList(list=>[...list,task])
            setTask('');
            setList(newArr);

            localStorage.setItem('NewTask', JSON.stringify(newArr))
           // console.log(list)
        }
    }
    
    function handleDelete(index){
        const updatedTasks = list.filter((element,i)=>i!==index)
        setList(updatedTasks)

    }

    /*lets create priorities*/
    function moveTaskUp(index){
        if(index > 0){
            
            const MovedUp = [...list];
            [MovedUp[index],MovedUp[index-1]]=[MovedUp[index-1],MovedUp[index]]
             setList(MovedUp)
        }
    }
    /*move task down*/
    function MoveTaskDown(index){
        if(index < list.length-1){
            const MovedDown = [...list];
            [MovedDown[index],MovedDown[index+1]] = [MovedDown[index+1],MovedDown[index]]
            setList(MovedDown)
        }
    } 

    
    return(
        <div className="Mini-Main">
            <h2>Please Enter A Task</h2>
            <div className="mini">
                <input type="text"  placeholder="Enter a Task" onChange={HandleInput} />
                <button className="add" onClick={()=>HandleAdd(task)}>Add</button>
                <button className="delete-btn" onClick={handleSearch}>Search</button>
            </div>
            <ul>
            {list.map((newTask,index)=>
                <li key={index}>
                    <div className="inputTask">
                        <div className="span-container"><span className="TaskDisplay" >{newTask}</span></div>
                        <div className="button-container">
                            <button className="add"  onClick={()=>handleDelete(index)}>delete</button>
                            <button className="add" style={{backgroundColor:'orangered'}} onClick={()=>moveTaskUp(index)}>⬆</button>
                            <button className="add" onClick={()=>MoveTaskDown(index)}>⬇</button>
                            <button className="add" onClick={()=>handleEdit(task,index)}>Edit</button>
                        </div>
                    </div>
                    
                </li>
            
            )}
            </ul>
        </div>
    );
}
export default Home