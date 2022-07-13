import { Link } from "react-router-dom";

const Tasklist = (props) => {
    var tasks = props.taskList;
    var title = props.title;

    const handleDelete = (taskId) => {
        fetch(`http://localhost:4002/tasks/${taskId}`,
            { method: "DELETE" })
            .then(() => {
                alert("Task deleted")
            })

    }


    return (
        <div id="tasklist">
            <h1 align="center" id="title">{title}</h1>

            <table id="tasktable">
                <thead>
                    <tr>
                        <th>Sl.no</th>
                        <th>Name</th>
                        <th>Task</th>
                        <th>Start date</th>
                        <th>End date</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks.map((task, i) => {
                            // let value;
                            // if (task.status === 'Pending' || task.status === 'Ongoing') {
                            //     value = "Edit"
                            // } else if (task.status === 'Completed') {
                            //     value = "Delete"
                            // }
                
                            return (//html inside js therefore return() or ()
                                <tr>
                                    <td>{i + 1}</td>
                                    <td>{task.name}</td>
                                    <td>{task.taskName}</td>
                                    <td>{task.uStartDate}</td>
                                    <td>{task.uEndDate}</td>
                                    <td>{task.status}</td>
                                    {/* <button>{value}</button> */}
                                    {(task.status === 'Completed') && <td><button onClick={() => { { handleDelete(task.id) } }}>Delete</button></td>}
                                    {(task.status !== 'Completed') && <td><Link to={`/editTask${task.id}`}><button>Edit</button></Link></td>}
                                </tr>
                            )
                        })
                    }
                </tbody>

            </table>

        </div>
    );
}

export default Tasklist;