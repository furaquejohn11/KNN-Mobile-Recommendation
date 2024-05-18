import { MdOutlinePhoneIphone } from "react-icons/md"
import { useNavigate } from "react-router-dom"
import { useState } from "react";

const NavBar = () => {

    const [display, setDisplay] = useState('');
    const [ram, setRam] = useState('');
    const [storage, setStorage] = useState('');
    const [battery, setBattery] = useState('');
    const [budget, setBudget] = useState('');

    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/");
      };

    const handleModal = () => {
        const modal = document.getElementById('my_modal_1');
        if (modal && modal instanceof HTMLDialogElement) {
            modal.showModal();
        }
    }
    const handleSubmit = (e: any) => {
        e.preventDefault();
        const modal = document.getElementById('my_modal_1');
        if (modal && modal instanceof HTMLDialogElement) {
            modal.close();
        }
        // Pass the input values to another component or perform desired actions
        // Example: navigate to another page with the input values
        navigate('/find', { state: { display, ram, storage, battery, budget } });
      };

    return (
        <header className="navbar bg-base-100">
            <div className="flex-1 text-2xl ml-4">
                <MdOutlinePhoneIphone onClick={handleClick}/>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 text-lg font-semibold">
                <li><a href="/home">View Phones</a></li>
                <li><a onClick={handleModal}>Find Your Phone</a></li>
                <li><a>About</a></li>
                </ul>
            </div>

            {/* <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>open modal</button> */}
            <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
                <div className="modal-action">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className=" border-none">Close</button>
                    </form>
                </div>


                <h3 className="font-bold text-lg">Phone Preference</h3>
                <p className="py-4"></p>


                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                    <label className="block font-bold mb-2">Display</label>
                    <input
                        className="border rounded-lg py-2 px-4 w-full"
                        id="camera"
                        placeholder="Enter camera megapixels"
                        type="number"
                        value={display}
                        onChange={(e) => setDisplay(e.target.value)}
                        required
                    />
                    <label className="block font-bold mb-2">RAM</label>
                    <input
                        className="border rounded-lg py-2 px-4 w-full"
                        id="camera"
                        placeholder="Enter RAM in GB"
                        type="number"
                        value={ram}
                        onChange={(e) => setRam(e.target.value)}
                        required
                    />

                    <label className="block font-bold mb-2">Storage</label>
                    <input
                        className="border rounded-lg py-2 px-4 w-full"
                        id="camera"
                        placeholder="Enter storage in GB"
                        type="number"
                        value={storage}
                        onChange={(e) => setStorage(e.target.value)}
                        required
                    />

                    <label className="block font-bold mb-2">Battery</label>
                    <input
                        className="border rounded-lg py-2 px-4 w-full"
                        id="camera"
                        placeholder="Enter Battery in mAh"
                        type="number"
                        value={battery}
                        onChange={(e)=> setBattery(e.target.value)}
                        required
                    />

                    <label className="block font-bold mb-2">Budget</label>
                    <input
                        className="border rounded-lg py-2 px-4 w-full"
                        id="camera"
                        placeholder="Enter budget in PHP"
                        type="number"
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        required
                    />
                    <button type="submit" 
                    className="btn bg-gray-900 text-white hover:bg-gray-900/90">Search</button>
                </form>
                
            </div>
            </dialog>
        </header>
  )
}

export default NavBar