import React, { useState } from "react";
import "./Modal.css";

export default function InventoryModal({ content, text, header, inventory, createInventory, updateInventory, deleteInventory }) {
    const [modal, setModal] = useState(false);
    const [newInventory, setNewInventory] = useState('');

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

            {text === "Add New +" && modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <form onSubmit={handleCreate}>
                            <p>Name</p>
                            <input type="text" onChange={handleChange} name="name" value={newInventory.name} /><hr />
                            <p>Category</p>
                            <input type="text" onChange={handleChange} name="category" value={newInventory.category} /><hr />
                            <p>Price</p>

                            <input type="text" onChange={handleChange} name="price" value={newInventory.price} /><hr />
                            <p>Quantity</p>

                            <input type="text" onChange={handleChange} name="quantity" value={newInventory.quantity} /><hr />

                            <p>image</p>
                            <input type="text" onChange={handleChange} name="image" value={newInventory.image} /><hr />


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
                            <input type="text" onChange={handleChange} name="name" defaultValue={inventory.name} /><hr />
                            <p>{inventory.category}</p>
                            <input type="text" onChange={handleChange} name="category" defaultValue={inventory.category} /><hr />
                            <p>{inventory.price}</p>
                            <input type="text" onChange={handleChange} name="price" defaultValue={inventory.price} /><hr />
                            <p>{inventory.image}</p>
                            <input type="text" onChange={handleChange} name="image" defaultValue={inventory.image} /><hr />

                            <button type="submit">Submit</button>
                        </form>

                        <button className="close-modal" onClick={toggleModal}>
                            CLOSE
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