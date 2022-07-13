import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav id="navbar">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAUdJREFUSEvtl+ERATEQhd91QAdUQAl0oAN0QCV0gA50QAeogBKUYN5M1qxM7rK52Zv7I7/MZbPf7mbzEhV6GlVPXFjBCwATY5AvAKecbR14oEAjAMeco2iegb7Dt4f6/TVLgVcADoWgnPk6Dj4GM7tnzkvL+aHOPAbPAFyC4y2AO4ApgF0hLLV2DuAqfprAYqiDsfJTa4vBzHhvJQa7TaiWDroYXMj8Mf+Di5rLUmoKDjuf3SzCwXWdlppQHkE2IY8fm0jgbmAKDLVYhobyG+WRMFewSKnIXw7qUupYSrmXy1DeVKZSEZdS110ecXl1M7qA6TCGN0FdSq2zEHgO6g6mQ170FAN9ZlPn3a3UFjHpZI//4FwFzHtMvb3lvLWcH2u5Tb0y+ZSlKnkOvrN5DL+j7l3N48LsPQZvrHPsyPpPwiOAHx+9gT//FX8f7nlc0AAAAABJRU5ErkJggg==" />
                <Link to="/" id="h1">Tasks</Link>
                <Link to="/home">Home</Link>
                <Link to="/addTask">Add new task</Link>
            </nav>
        </div>
    );
}

export default Navbar;