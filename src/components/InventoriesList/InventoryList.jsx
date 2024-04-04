import React, { useContext } from 'react'
import "./Inventory.css"
import InventoriesModal from '../Modal/InventoriesModal.jsx';
import { InventoriesContext } from '../../context/InventoriesContext';
const InventoriesList = () => {

  const { inventories } = useContext(InventoriesContext);
  console.log(inventories);
  return (
    <div> {
      inventories ? (
        <>
  
          {inventories.map(item => {
  
            return (<>
              <>
                <InventoriesModal inventories={item} />
                {item.itemId}
                {" "} | {" "}
                {item.name}
  
                {" "} | {" "}
  
                {item.category}
  
                {" "} | {" "}
  
                {item.position}
                {" "} | {" "}
  
                {item.price}
                {" "} | {" "}
                {item.quantity}
              </>
              <hr />
            </>)
          })}
        </>
      ) : (
        <p>Loading...</p>
      )
    }</div>
  )
};
export default InventoriesList;