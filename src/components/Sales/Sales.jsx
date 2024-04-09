import React, { useContext } from 'react'
import "./Sales.css"
import { SalesContext } from '../../context/SalesContext';
import Sale from '../Sale/Sale';
import SaleModal from '../Modal/SaleModal';
const Sales = () => {
  const { sales, createSale, updateSale, deleteSale } = useContext(SalesContext);
  return (
    <div>
      <SaleModal content={"Sale"} header={"Create"} createSale={createSale} />
     
      <ul style={{ display: "flex", flexDirection: "column" }}>

        {sales.map((sale) => (<Sale key={sale.id} sale={sale} updateSale={updateSale} deleteSale={deleteSale} />))}
      </ul>
    </div>
  )
}

export default Sales