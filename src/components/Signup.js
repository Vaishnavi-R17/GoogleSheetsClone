import { useState } from "react";
import { useHistory } from "react-router-dom";


const Signup = () => {

    const [uname, setUname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [gender, setGender] = useState("")


    let history = useHistory();
    

    const handleCreate = (e) => {

        e.preventDefault();//prevents the page reload

        let newUser = { uname, email, password, gender }


        fetch("http://localhost:4001/users",
            {
                method: "POST", //what process
                headers: { "Content-Type": "application/json" }, //type of data
                body: JSON.stringify(newUser) // what data to post
                //stringify-to convert given value into string i.e to a json format
            })
            .then(() => {
                alert("New user added...!!!")
                history.push("/login")//redirect to home page
            })
    }

    return (
        <div id="signUpForm">
            <h1>Sign Up</h1>
            <form onSubmit={handleCreate}>
                <label for="name">Name:</label><input type="text" placeholder="Enter your name" value={uname} onChange={(e) => { setUname(e.target.value) }} />
                <label for="email">E-mail:</label><input type="email" placeholder="Enter your email id" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                <label for="password">Password:</label><input type="password" placeholder="Enter password" value={password} onChange={(e) => { setPassword(e.target.value) }} />

                <fieldset>
                    <legend>Enter your gender</legend>
                    <input type="radio" value="Male" name="gender" onClick={(e) => { setGender(e.target.value) }} /><label for="m">Male</label>
                    <input type="radio" value="Female" name="gender" onClick={(e) => { setGender(e.target.value) }} /><label for="f">Female</label>
                    <input type="radio" value="Others" name="gender" onClick={(e) => { setGender(e.target.value) }} /><label for="o">Others</label>
                </fieldset>

                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default Signup;