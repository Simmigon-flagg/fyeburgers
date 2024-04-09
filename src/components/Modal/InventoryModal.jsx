import React, { useState } from "react";
import "./Modal.css";

export default function InventoryModal({ content, header, inventory, createInventory, updateInventory, deleteInventory }) {
    const [modal, setModal] = useState(false);
    const [newInventory, setNewInventory] = useState(inventory);

    const toggleModal = () => {
        setModal(!modal);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewInventory(prevStore => ({
            ...prevStore,
            [name]: value
        }));
    };

    const handleCreate = (e) => {
        e.preventDefault();
        createInventory(newInventory);
        setNewInventory("");
        toggleModal();
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        updateInventory(inventory.id, newInventory);
        toggleModal()

    };
    const handleDelete = (e) => {
        e.preventDefault();
        deleteInventory(inventory.id);
        toggleModal()
    };

    return (
        <>
            <p onClick={toggleModal} className="btn-modal">
                {header}
            </p>

            {header === "Create" && modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <form onSubmit={handleCreate}>


                            <button type="submit">Submit</button>
                        </form>

                    </div>
                </div>
            )}
            {header === "Read" && modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <h2>{content}: </h2>
                        <p>{inventory.name}</p>
                        <p>{inventory.category}</p>
                        <p>{inventory.price}</p>
                        <p>{inventory.image}</p>
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
                            <p>{inventory.name}</p>
                            <input type="text" onChange={handleChange} name="name" defaultValue={newInventory.name} /><hr />
                            <p>{inventory.category}</p>
                            <input type="text" onChange={handleChange} name="category" defaultValue={newInventory.category} /><hr />
                            <p>{inventory.price}</p>
                            <input type="text" onChange={handleChange} name="price" defaultValue={newInventory.price} /><hr />
                            <p>{inventory.image}</p>
                            <input type="text" onChange={handleChange} name="image" defaultValue={newInventory.image} /><hr />

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
                        <h2>{content}:  </h2>

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