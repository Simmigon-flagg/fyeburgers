import React, { useContext } from 'react'
import "./Stores.css"
import { StoresContext } from '../../context/StoresContext';
import SingleStore from '../SingleStore/SingleStore';
import StoreModal from '../Modal/StoreModal';
const Stores = () => {
  const { stores, createStore, updateStore, deleteStore } = useContext(StoresContext);
  return (
    <div>
      <StoreModal content={"Store"} header={"Create"} createStore={createStore} />
     
      <div style={{ display: "flex", flexDirection: "column" }}>
        {stores.map((store) => (<SingleStore key={store.id} store={store} updateStore={updateStore} deleteStore={deleteStore} />))}
      
      </div>
    </div>
  )
}

export default Stores