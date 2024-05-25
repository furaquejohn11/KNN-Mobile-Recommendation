// import { MdOutlinePhoneIphone } from "react-icons/md"
import { useNavigate } from "react-router-dom";
import ModalAbout from "./ModalAbout";
import ModalFindYourPhone from "./ModalFindYourPhone";

const NavBar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  const handleModalFindYourPhone = () => {
    const modal = document.getElementById('my_modal_1');
    if (modal && modal instanceof HTMLDialogElement) {
      modal.showModal();
    }
  };

  const handleModalAbout = () => {
    const modal = document.getElementById('my_modal_3');
    if (modal && modal instanceof HTMLDialogElement) {
      modal.showModal();
    }
  };

  return (
    <header className="navbar bg-base-100 py-2">
      <div className="flex-1 text-2xl ml-4">
        <img src="dletech-favicon-black.png" className="size-16" onClick={handleClick}/>
        <img src="dletech-text.png" className="h-8" />
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 text-lg font-semibold">
          <li><a href="/home">View Phones</a></li>
          <li><a onClick={handleModalFindYourPhone}>Find Your Phone</a></li>
          <li><a onClick={handleModalAbout}>About</a></li>
        </ul>
      </div>

      <ModalFindYourPhone />
      <dialog id="my_modal_3" className="modal">
        <ModalAbout />
      </dialog>
    </header>
  );
};

export default NavBar;

