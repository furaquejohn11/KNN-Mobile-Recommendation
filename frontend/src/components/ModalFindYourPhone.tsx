import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ModalFindYourPhone = () => {
    const [display, setDisplay] = useState('');
    const [ram, setRam] = useState('');
    const [storage, setStorage] = useState('');
    const [battery, setBattery] = useState('');
    const [budget, setBudget] = useState('');
  
    const navigate = useNavigate();
  
    const handleSubmit = (e: any) => {
      e.preventDefault();
      const modal = document.getElementById('my_modal_1');
      if (modal && modal instanceof HTMLDialogElement) {
        modal.close();
      }
      navigate('/find', { state: { display, ram, storage, battery, budget } });
    };
  
    return (
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box pt-0">
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost text-lg absolute right-2 top-2">✕</button>
            </form>
          </div>
  
          <h3 className="font-bold text-lg text-center">Phone Preference</h3>
          <p className="py-4"></p>
  
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <label className="block font-bold mb-2">Display</label>
            <input
              className="border rounded-lg py-2 px-4 w-full"
              placeholder="Enter Display in Inch"
              type="number"
              value={display}
              onChange={(e) => setDisplay(e.target.value)}
              required
            />
            <label className="block font-bold mb-2">RAM</label>
            <input
              className="border rounded-lg py-2 px-4 w-full"
              placeholder="Enter RAM in GB"
              type="number"
              value={ram}
              onChange={(e) => setRam(e.target.value)}
              required
            />
            <label className="block font-bold mb-2">Storage</label>
            <input
              className="border rounded-lg py-2 px-4 w-full"
              placeholder="Enter storage in GB"
              type="number"
              value={storage}
              onChange={(e) => setStorage(e.target.value)}
              required
            />
            <label className="block font-bold mb-2">Battery</label>
            <input
              className="border rounded-lg py-2 px-4 w-full"
              placeholder="Enter Battery in mAh"
              type="number"
              value={battery}
              onChange={(e) => setBattery(e.target.value)}
              required
            />
            <label className="block font-bold mb-2">Budget</label>
            <input
              className="border rounded-lg py-2 px-4 w-full"
              placeholder="Enter budget in PHP"
              type="number"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              required
            />
            <button type="submit" className="btn bg-gray-900 text-white hover:bg-gray-900/90 mt-4">Search</button>
          </form>
        </div>
      </dialog>
    );
  };

export default ModalFindYourPhone