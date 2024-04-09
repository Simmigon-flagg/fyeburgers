import React, { useState } from "react";
import "./Modal.css";

export default function ManagerModal({ content, header, manager, createManager, updateManager, deleteManager }) {
    const [modal, setModal] = useState(false);
    const [newManager, setNewManager] = useState(manager);
   
    const toggleModal = () => {
        setModal(!modal);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewManager(prevStore => ({
            ...prevStore,
            [name]: value
        }));
    };

    const handleCreate = (e) => {
        e.preventDefault();
        createManager(newManager);
        setNewManager("");
        toggleModal();
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        updateManager(manager.id, newManager);
        toggleModal()

    };

    const handleDelete = (e) => {
        e.preventDefault();
        deleteManager(manager.id);
        toggleModal()
    };

  

    return (
        <>
            <p onClick={toggleModal} className="btn-modal">
                {header}
            </p>

            {header === "Create" && modal && (
                <div className="modal" >
                    <div onClick={toggleModal} className="overlay" >

                        <div className="modal-content">
                            <form onSubmit={handleCreate}>
                                <input type="text" onChange={handleChange} name="name" value={newManager.name} />
                                <input type="text" onChange={handleChange} name="position" value={newManager.position} />
                                <input type="text" onChange={handleChange} name="level" value={newManager.level} />
                                <input type="text" onChange={handleChange} name="role" value={newManager.role} />
                                <input type="text" onChange={handleChange} name="contact" value={newManager.contact} />
                                <input type="text" onChange={handleChange} name="password" value={newManager.password} />
                                <input type="text" onChange={handleChange} name="access" value={newManager.access} />

                                <button type="submit">Submit</button>
                            </form>

                        </div>
                    </div>
                </div>
            )}
            {header === "Read" && modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <h2>{content}:</h2>
                        <p>Name:{manager.name}</p>

                        <p>Position {manager.position}</p>

                        <p>level {manager.level}</p>

                        <p>role {manager.role}</p>

                        <p>contact {manager.contact}</p>

                        <p>login {manager.password}</p>

                        <p>access {manager.access}</p>




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
                        <p>Name  {manager.name}</p>
                            <input type="text" onChange={handleChange} name="name" defaultValue={newManager.name} /><hr />
                            <p>Position {manager.position}</p>
                            <input type="text" onChange={handleChange} name="position" defaultValue={newManager.position} /><hr />
                            <p>level {manager.level}</p>
                            <input type="text" onChange={handleChange} name="level" defaultValue={newManager.level} /><hr />
                            <p>role {manager.role}</p>
                            <input type="text" onChange={handleChange} name="role" defaultValue={newManager.role} /><hr />
                            <p>contact {manager.contact}</p>
                            <input type="text" onChange={handleChange} name="contact" defaultValue={newManager.contact} /><hr />
                            <p>login {manager.password}</p>
                            <input type="text" onChange={handleChange} name="password" defaultValue={newManager.password} /><hr />
                            <p>access {manager.access}</p>
                            <input type="text" onChange={handleChange} name="access" defaultValue={newManager.access} /><hr />

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
                        <h2>{content}:</h2>



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