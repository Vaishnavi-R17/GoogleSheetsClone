import useFetch from "../useFetch.js";
import Tasklist from "./Tasklist.jsx";

const Home = () => {
    let { data: tasks, pending, error } = useFetch("http://localhost:4002/tasks")
    return (
        <div>
            {pending && <h1 align="center" id="load">Loading...!!!</h1>}
            {error && <h1 align="center">{error}</h1>}
            {tasks && <Tasklist taskList={tasks} title="Tasks" />}
        </div>
    )
}

export default Home;