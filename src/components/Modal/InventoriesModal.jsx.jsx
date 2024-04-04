import React, { useState } from "react";
import "./Modal.css";

export default function InventoriesModal({ inventories }) {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return (
        <>
            <button onClick={toggleModal} className="btn-modal">
                Open
            </button>

            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <h2>Inventory Item</h2>
                        <h2>Name: {inventories.name}</h2>


                        <p>
                            {inventories.position}
                        </p>
                        <button className="close-modal" onClick={toggleModal}>
                            CLOSE
                        </button>
                        <button className="" onClick={toggleModal}>
                            Updated 
                        </button>
                        <button className="" onClick={toggleModal}>
                            Deleted 
                        </button>
                      
                    </div>
                </div>
            )}

        </>
    );
}