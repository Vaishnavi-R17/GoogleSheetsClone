import { useRef } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";


const Addtask = () => {
    const [name, setName] = useState("")
    const [taskName, setTaskName] = useState("")
    const [taskDetails, setTaskDetails] = useState("")
    const [uStartDate, setStartDate] = useState("")
    const [uEndDate, setEndDate] = useState("")
    let status = useRef("")


    let history = useHistory();


    const handleAddTask = (e) => {

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

        fetch("http://localhost:4002/tasks",
            {
                method: "POST", //what process
                headers: { "Content-Type": "application/json" }, //type of data
                body: JSON.stringify(newTask) // what data to post
                //stringify-to convert given value into string i.e to a json format
            })
            .then(() => {
                alert("New task added...!!!")
                history.push("/home")//redirect to home page
            })
    }
    return (
        <div id="addtask">
            <h1>Add task</h1>
            <form onSubmit={handleAddTask}>
                <label>Name:</label><input type="text" placeholder="Enter your name" onChange={(e) => { setName(e.target.value) }} />
                <label>Task:</label><input type="text" placeholder="Task name" onChange={(e) => { setTaskName(e.target.value) }} />
                <label>Task detail:</label><textarea cols="30" rows="10" onChange={(e) => { setTaskDetails(e.target.value) }}></textarea>
                <label>Start date:</label><input type="date" onChange={(e) => { setStartDate(e.target.value) }} />
                <label>End date:</label><input type="date" onChange={(e) => { setEndDate(e.target.value) }} />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default Addtask;