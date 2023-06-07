import { Link } from 'react-router-dom';
import { logOut } from '../../utilities/users-service';

export default function NavBar({ setUser, user }) {
    function handleLogOut() {
        logOut();
        setUser(null);
    }
    return (
        <>
            <nav>
                <Link to="/songs">View Songs</Link>
                &nbsp; | &nbsp;
                <Link to="/songs/new">Add a Song</Link>
                &nbsp; | &nbsp;
                <span>Welcome, {user.name}</span>
                &nbsp; | &nbsp;
                &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
            </nav>
        </>
    )
}