import Login from "./components/Login.js";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Signup from "./components/Signup.js"
import Landing from "./components/Landing.js";
import Home from "./components/Home";
import Navbar from "./components/Navbar.jsx";
import Addtask from "./components/Addtask.jsx";
import Taskdetails from "./components/Taskdetails.jsx";
import Tasklist from "./components/Tasklist.jsx";
import Edittask from "./components/Edittask.jsx";

function App() {
  return (
    <div className="App">

      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/signUp">
            <Signup />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/addTask">
            <Addtask />
          </Route>

          <Route path="/taskDetails">
            <Taskdetails />
          </Route>

          <Route path="/taskList">
            <Tasklist/>
          </Route>

          <Route path="/editTask:id">
            <Edittask/>
          </Route>


        </Switch>
      </Router>
    </div>
  );
}

export default App;
