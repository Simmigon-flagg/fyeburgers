import React, { useState } from "react";
import "./Modal.css";

export default function SaleModal({ content, header, sale, createSale, updateSale, deleteSale }) {
    const [modal, setModal] = useState(false);
    const [newSale, setNewSale] = useState(sale);

    const toggleModal = () => {
        setModal(!modal);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        setNewSale(prevStore => ({
            ...prevStore,
            [name]: value
        }));
    };

    const handleCreate = (e) => {
        e.preventDefault();
        createSale(newSale);
        setNewSale("");
        toggleModal();
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        updateSale(sale.id, newSale);
        toggleModal()

    };

    const handleDelete = (e) => {
        e.preventDefault();
        deleteSale(sale.id);
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

                            <label htmlFor="in">Name:</label><br />
                            <input type="text" id="name" name="name" value={newSale?.name} onChange={handleChange} required /><br /><br />

                            <label htmlFor="store_number">Store number:</label><br />
                            <input type="text" id="store_number" name="store_number" value={newSale?.store_number} onChange={handleChange} required /><br /><br />

                            <label htmlFor="branch_location">Address:</label><br />
                            <input type="text" id="branch_location" name="branch_location" value={newSale?.branch_location} onChange={handleChange} required /><br /><br />

                            <button type="submit">Submit</button>
                        </form>

                    </div>
                </div>
            )}
            {header === "Read" && modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <h2>{content}: #{sale.orderId} </h2>
                        <h2>Name: {sale.timeOfSale}</h2>
                        <ul>
                            {sale.items.map((item) => <li key={item.id}>{item.name} {item.quantity} {item.price} {item.total}</li>)}
                        </ul>


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
                            <label htmlFor="name">Name:{sale?.name} </label><br />
                            <input type="text" id="name" name="name" onChange={handleChange} /><br /><br />

                            <label htmlFor="store_number">Store number:{sale?.store_number}</label><br />
                            <input type="text" id="store_number" name="store_number" onChange={handleChange} /><br /><br />

                            <label htmlFor="branch_location">Address:{sale?.branch_location}</label><br />
                            <input type="text" id="branch_location" name="branch_location" onChange={handleChange} /><br /><br />

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
                        <h2>{content}: #{sale.store_number} </h2>
                        <h2>Name: {sale.name}</h2>
                        <p>
                            {sale.branch_location}
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