import React, { useState } from "react";
import "./Modal.css";

export default function EmployeeModal({ content, header, employee, createEmployee, updateEmployee, deleteEmployee }) {
    const [modal, setModal] = useState(false);
    const [newEmployee, setNewEmployee] = useState(employee);


    const toggleModal = () => {
        setModal(!modal);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewEmployee(prevStore => ({
            ...prevStore,
            [name]: value
        }));
    };

    const handleCreate = (e) => {
        e.preventDefault();
        createEmployee(newEmployee);
        setNewEmployee("");
        toggleModal();
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        updateEmployee(employee.id, newEmployee);
        toggleModal()

    };

    const handleDelete = (e) => {
        e.preventDefault();
        deleteEmployee(employee.id);
        toggleModal()
    };


    return (
        <>
            <p onClick={toggleModal} className="btn-modal">
                {header}
                </p>

            {header === "Create" && modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay">

                        <div className="modal-content">
                            <form onSubmit={handleCreate}>

                                <button type="submit">Submit</button>
                            </form>

                        </div>
                    </div>
                </div>
            )}
            {header === "Read" && modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay">

                        <div className="modal-content">
                            <h2>{content}: </h2>
                            <p>Name  {employee.name}</p>

                            <p>Position {employee.position}</p>

                            <p>level {employee.level}</p>

                            <p>role {employee.role}</p>

                            <p>contact {employee.contact}</p>

                            <p>login {employee.password}</p>

                            <p>access {employee.access}</p>


                            <button className="close-modal" onClick={toggleModal}>
                                CLOSE
                            </button>


                        </div>
                    </div>
                </div>
            )}
            {header === "Update" && modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <form onSubmit={handleEditSubmit}>
                        <p>Name  {employee.name}</p>
                            <input type="text" onChange={handleChange} name="name" defaultValue={newEmployee.name} /><hr />
                            <p>Position {employee.position}</p>
                            <input type="text" onChange={handleChange} name="position" defaultValue={newEmployee.position} /><hr />
                            <p>level {employee.level}</p>
                            <input type="text" onChange={handleChange} name="level" defaultValue={newEmployee.level} /><hr />
                            <p>role {employee.role}</p>
                            <input type="text" onChange={handleChange} name="role" defaultValue={newEmployee.role} /><hr />
                            <p>contact {employee.contact}</p>
                            <input type="text" onChange={handleChange} name="contact" defaultValue={newEmployee.contact} /><hr />
                            <p>login {employee.password}</p>
                            <input type="text" onChange={handleChange} name="password" defaultValue={newEmployee.password} /><hr />
                            <p>access {employee.access}</p>
                            <input type="text" onChange={handleChange} name="access" defaultValue={newEmployee.access} /><hr />
                            <button type="submit">Submit</button>
                        </form>
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