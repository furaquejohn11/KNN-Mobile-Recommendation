import { MdOutlinePhoneIphone } from "react-icons/md"
import { useNavigate } from "react-router-dom"

const NavBar = () => {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/");
      };

    return (
        <header className="navbar bg-base-100">
            <div className="flex-1 text-2xl ml-4">
                <MdOutlinePhoneIphone onClick={handleClick}/>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 text-lg font-semibold">
                <li><a href="/home">View Phones</a></li>
                <li><a>About</a></li>
                <li><a>Contact</a></li>
                </ul>
            </div>
        </header>
  )
}

export default NavBar