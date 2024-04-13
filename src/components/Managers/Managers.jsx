import React, { useContext } from 'react'
import "./Managers.css"

import SingleManager from '../SingleManager/SingleManager';
import ManagerModal from '../Modal/ManagerModal';
import { ManagersContext } from '../../context/ManagersContext';
const Managers = () => {
  const { managers, createManager, updateManager, deleteManager } = useContext(ManagersContext);
  return (
    <div>
      <ManagerModal content={"Manager"} header={"Create"} createManager={createManager} />
      <div style={{ display: "flex", flexDirection: "column" }}>

        {managers.map((manager) => (
          <SingleManager key={manager.id} manager={manager} updateManager={updateManager} deleteManager={deleteManager} />
        ))}
      </div>
    </div>
  )
}

export default Managers