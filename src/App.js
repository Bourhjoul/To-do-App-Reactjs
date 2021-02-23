import Header from "./Compenets/Header";
import Tasks from "./Compenets/Tasks";
import { useState,useEffect } from 'react';
import Addtask from "./Compenets/Addtask";
import Footer from "./Compenets/footer";
function App() {
  const [Tassk, setTasks] = useState([]);
  const [showaddtask,setshowaddtask]=useState(false);
  useEffect(() => {
    const gettasks = async () =>{
      const tasksfromserver = await fetchtasks();
      setTasks(tasksfromserver);
    }

    gettasks(); 
  },[]);
  const fetchtasks = async () =>{
    const res = await fetch ('http://localhost:5000/tasks');
    const data = await res.json();
    return data;
  }
  const fetchtask = async (id) =>{
    const res = await fetch (`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  }
  const addtask= async (task) =>{
    const res = await fetch ('http://localhost:5000/tasks',{method : 'POST',headers : {'Content-type' : 'application/json'},body : JSON.stringify(task)})
    const data = await res.json();
    setTasks([...Tassk,data]);
    // const id = Math.floor(Math.random() * 10000) +1;
    
    // const newTask = {id, ...task};
    // setTasks([...Tassk,newTask]);
  }
  const deletetask = async (id) =>{
    await fetch(`http://localhost:5000/tasks/${id}`,{method : 'DELETE'})
    setTasks(Tassk.filter((task)=>task.id !== id  ));
  } 

  const  toggleRem= async (id) =>{
    const task = await fetchtask(id);
    const updtask = {...task,reminder : !task.reminder}
    const res = await fetch (`http://localhost:5000/tasks/${id}`,{method : 'PUT',headers : {'Content-type' :'application/json'},body:JSON.stringify(updtask)})

    const data = await res.json();
    setTasks(Tassk.map((task)=>task.id === id ? ({...task, reminder : !data.reminder}) : task))
  }
  return (
    <div className="App">
      <Header title = "Task Tracker" onAdd = {() => setshowaddtask(!showaddtask)} showaddtask = {showaddtask}/>
      {showaddtask && <Addtask onAdd = {addtask} />}
      {Tassk.length > 0 ? (<Tasks Tassk = {Tassk} onDelete={deletetask}  onToggle = {toggleRem}/>) : ('No tasks to show.') }
      <Footer />
    </div>
  )
}

export default App;
