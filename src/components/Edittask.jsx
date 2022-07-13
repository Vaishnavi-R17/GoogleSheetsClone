import { useRef } from "react";
import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "../useFetch";


const Edittask = () => {
    const [name, setName] = useState("")
    const [taskName, setTaskName] = useState("")
    const [taskDetails, setTaskDetails] = useState("")
    const [uStartDate, setStartDate] = useState("")
    const [uEndDate, setEndDate] = useState("")
    let status = useRef("")

    let history = useHistory();

    let { id } = useParams();

    let { data: task } = useFetch(`http://localhost:4002/tasks/${id}`)

    const handleEdit = (e) => {
        e.preventDefault();//prevents the page reload
        var currentDate = new Date();
        var startDate = new Date(uStartDate)
        var endDate = new Date(uEndDate)
        let status = "";

        if (currentDate < startDate) {
            status = "Pending";
        }
        else if (currentDate >= startDate && currentDate <= endDate) {
            status = "Ongoing"
        }
        else {
            status = "Completed";
        }



        let newTask = { name, taskName, taskDetails, uStartDate, uEndDate, status }
        console.log(newTask);

        fetch(`http://localhost:4002/tasks/${id}`,
            {
                method: "PUT", //what process
                headers: { "Content-Type": "application/json" }, //type of data
                body: JSON.stringify(newTask) // what data to post
                //stringify-to convert given value into string i.e to a json format
            })
            .then(() => {
                alert("Task edited successfully...!!!")
                history.push('/home')

            })
    }

    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleTaskName = (e) => {
        setTaskName(e.target.value)
    }
    const handleTaskDetails = (e) => {
        setTaskDetails(e.target.value)
    }
    const handleStartDate = (e) => {
        setStartDate(e.target.value)
    }
    const handleEndDate = (e) => {
        setEndDate(e.target.value)
    }
    

    return (
        <div id="edittask">
            <h1>Edit task</h1>
            {/*this structure will be displayed once the object is fetched */}
            {task &&
                <div>
                    <form onSubmit={handleEdit}>
                        {/* <label>Name:</label><input type="text" placeholder="Enter your name" onChange={(e) => { setName(e.target.value) }} defaultValue={task.name} />
                        <label>Task:</label><input type="text" placeholder="Task name" onChange={(e) => { setTaskName(e.target.value) }} defaultValue={task.taskName} />
                        <label>Task detail:</label><textarea cols="30" rows="10" onChange={(e) => { setTaskDetails(e.target.value) }} defaultValue={task.taskDetails}></textarea>
                        <label>Start date:</label><input type="date" onChange={(e) => { setStartDate(e.target.value) }} defaultValue={task.uStartDate} />
                        <label>End date:</label><input type="date" onChange={(e) => { setEndDate(e.target.value) }} defaultValue={task.uEndDate} />
                        <button type="submit">Edit</button> */}



                        <label>Name:</label><input type="text" placeholder="Enter your name" onChange={handleName} defaultValue={task.name} />
                        <label>Task:</label><input type="text" placeholder="Task name" onChange={handleTaskName} defaultValue={task.taskName} />
                        <label>Task detail:</label><textarea cols="30" rows="10" onChange={handleTaskDetails} defaultValue={task.taskDetails}></textarea>
                        <label>Start date:</label><input type="date" onChange={handleStartDate} defaultValue={task.uStartDate} />
                        <label>End date:</label><input type="date" onChange={handleEndDate} defaultValue={task.uEndDate} />
                        <button type="submit">Edit</button>
                    </form>
                </div>
            }
        </div>
    );
}

export default Edittask;