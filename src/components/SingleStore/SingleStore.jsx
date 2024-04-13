import React from 'react'
import "./SingleStore.css";
import StoreModal from '../Modal/StoreModal';

const Store = ({ store, updateStore, deleteStore }) => {


  return (
    <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
      <StoreModal content={"Store"} header={"Read"} store={store} ><p>{store.name}</p></StoreModal>
      
      <StoreModal content={"Store"} header={"Update"} store={store} updateStore={updateStore} />
      <StoreModal content={"Store"} header={"Delete"} store={store} deleteStore={deleteStore} />
    </div>

  )
}

export default Store