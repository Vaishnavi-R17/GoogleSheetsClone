import { Link, useHistory } from "react-router-dom";

const Landing = () => {
    let history = useHistory();
    return (
        <div id="landing">
            <section>
                <Link to="/login"><button className="button">Click here to Log In</button></Link>
                <h2>Don't have an account?</h2>
                <Link to="/signUp"><button className="button">Create new account</button></Link>
            </section>
        </div>
    );
}

export default Landing;