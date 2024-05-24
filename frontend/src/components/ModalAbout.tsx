
const ModalAbout = () => {
    return(
        <div className="modal-box">
            <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost text-lg absolute right-2 top-2">✕</button>
            </form>
            
            <section className="flex flex-col gap-2">
                <h3 className="font-bold text-lg text-center">About Us</h3>
                <p className="text-center">
                    Welcome to DleTech, your ultimate tech destination. 
                    Provided with innovative solution to enhance exploration of products and 
                    enjoy seamless tech experience with us
                </p>
                <h3 className="font-bold text-lg text-center">Members</h3>
                <ul className="text-center">
                    <li>Furaque, John Patrick F.</li>
                    <li>Sulte, Zachary Steven M.</li>
                    <li>Ardeza, Maiko B.</li>
                    <li>Constantino, Francis</li>
                    <li>Driz, Jayron</li>
                    <li>Dimasapit, Sedric</li>
                    <li>Maglaque, Mark Dle</li>
                </ul>
                <h3 className="font-bold text-lg text-center">Support</h3>
                <p className="text-center">
                    <a href="https://github.com/furaquejohn11" target="_blank">
                        https://github.com/furaquejohn11
                    </a>
                </p>
            </section>
        </div>
    );
}

export default ModalAbout