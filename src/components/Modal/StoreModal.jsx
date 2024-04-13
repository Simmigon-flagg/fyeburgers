import React, { useState } from "react";
import "./Modal.css";

export default function StoreModal({ content, header, store, createStore, updateStore, deleteStore }) {
    const [modal, setModal] = useState(false);
    const [newStore, setNewStore] = useState(store);

    const toggleModal = () => {
        setModal(!modal);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name + " " + value);
        setNewStore(prevStore => ({
            ...prevStore,
            [name]: value
        }));
    };

    const handleCreate = (e) => {
        e.preventDefault();
        createStore(newStore);
        setNewStore("");
        toggleModal(); // Close the modal after submission
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        updateStore(store.id, newStore);
        toggleModal()

    };

    const handleDelete = (e) => {
        e.preventDefault();
        deleteStore(store.id);
        toggleModal()
    };


    return (
        <>
            <p onClick={toggleModal} className="btn-modal">
                {store.name}
            </p>

            {header === "Create" && modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <form onSubmit={handleCreate}>

                            <label htmlFor="lastName">Name:</label><br />
                            <input type="text" id="name" name="name" value={newStore?.name} onChange={handleChange} required /><br /><br />

                            <label htmlFor="store_number">Store number:</label><br />
                            <input type="text" id="store_number" name="store_number" value={newStore?.store_number} onChange={handleChange} required /><br /><br />

                            <label htmlFor="branch_location">Address:</label><br />
                            <input type="text" id="branch_location" name="branch_location" value={newStore?.branch_location} onChange={handleChange} required /><br /><br />

                            <button type="submit">Submit</button>
                        </form>

                    </div>
                </div>
            )}
            {header === "Read" && modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <h2>{content}: #{store.store_number} </h2>
                        <h2>Name: {store.name}</h2>
                        <p>
                            {store.branch_location}
                        </p>
                        <button className="close-modal" onClick={toggleModal}>
                            CLOSE
                        </button>


                    </div>
                </div>
            )}
            {header === "Update" && modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <form onSubmit={handleEditSubmit}>
                            <label htmlFor="name">Name:{store?.name} </label><br />
                            <input type="text" id="name" name="name" defaultValue={newStore.name} onChange={handleChange} /><br /><br />

                            <label htmlFor="store_number">Store number:{store?.store_number}</label><br />
                            <input type="text" id="store_number" name="store_number" defaultValue={newStore.store_number} onChange={handleChange} /><br /><br />

                            <label htmlFor="branch_location">Address:{store?.branch_location}</label><br />
                            <input type="text" id="branch_location" name="branch_location" defaultValue={newStore.branch_location} onChange={handleChange} /><br /><br />

                            <button type="submit">Submit</button>
                        </form>


                        <button className="close-modal" onClick={toggleModal}>
                            CLOSE
                        </button>
                        <button className="" onClick={toggleModal}>
                            Update
                        </button>


                    </div>
                </div>
            )}
            {header === "Delete" && modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <h2>{content}: #{store.store_number} </h2>
                        <h2>Name: {store.name}</h2>
                        <p>
                            {store.branch_location}
                        </p>
                        <p>Are you sure!</p>
                        <button className="close-modal" onClick={toggleModal}>
                            CLOSE
                        </button>

                        <button className="" onClick={handleDelete}>
                            Delete
                        </button>

                    </div>
                </div>
            )}

        </>
    );
}