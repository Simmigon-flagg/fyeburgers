import React from 'react'

import "./Manager.css";

import ManagerModal from '../Modal/ManagerModal';
const Manager = ({ manager, updateManager, deleteManager }) => {


  return (

    <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
      <p>{manager.name}</p>
      <ManagerModal content={"Manager"} header={"Read"} manager={manager} />
      <ManagerModal content={"Manager"} header={"Update"} manager={manager} updateManager={updateManager} />
      <ManagerModal content={"Manager"} header={"Delete"} manager={manager} deleteManager={deleteManager} />
    </div>


  )
}

export default Manager