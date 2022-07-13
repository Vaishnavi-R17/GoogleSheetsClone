import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";


const Login = () => {

    const [userEmail, setEmail] = useState("")
    const [userPassword, setPassword] = useState("")
    let history = useHistory()
    let [users, setUsers] = useState(null)//for validation

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:4001/users")
            .then((response) => { return response.json() })
            .then((data) => {

                // setUsers(data);
                //below,which ever object's mail id is matched with the entered mailid,that object will be returned and stored in user
                let [user] = data.filter((user) => (user.email === userEmail))
                console.log(user);

                if (user !== undefined && user.password === userPassword) {
                    alert("Login successful")
                    history.push("/home")
                } else if (user !== undefined && user.password !== userPassword) {
                    alert("Password incorrect")
                } else {
                    alert("User not found")
                }
            })
    }

    return (
        <div id="loginForm">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label for="email">E-mail:</label><input type="email" value={userEmail} placeholder="Enter your email id" onChange={(e) => { setEmail(e.target.value) }} />
                <label for="password">Password:</label><input type="password" value={userPassword} placeholder="Enter password" onChange={(e) => { setPassword(e.target.value) }} />
                <button type="submit">Log In</button>
            </form>
            <Link to="/signUp">
                Create new account
            </Link>
        </div>
    );
}

export default Login;