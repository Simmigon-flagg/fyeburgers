import React from 'react'
import "./Stores.css"
import StoreComponent from '../../components/Stores/Stores'
import Modal from '../../components/Modal/StoreModal'
const Stores = () => {
  return (
    <div>
      <div>
        Stores
      </div>

      <div>
        <StoreComponent />
      </div>

    </div>
  )
}

export default Stores