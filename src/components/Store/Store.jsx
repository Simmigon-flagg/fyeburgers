import React from 'react'

import "./Store.css";

import StoreModal from '../Modal/StoreModal';
const Store = ({ store, updateStore, deleteStore }) => {


  return (
    <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
        <p>{store.name}</p>
        <StoreModal content={"Store"} header={"Read"} store={store} />
        <StoreModal content={"Store"} header={"Update"} store={store} updateStore={updateStore} />
        <StoreModal content={"Store"} header={"Delete"} store={store} deleteStore={deleteStore} />
      </div>

  )
}

export default Store