import React from 'react'

import "./Sale.css";

import SaleModal from '../Modal/SaleModal';
const Sale = ({ sale, updateSale, deleteSale }) => {

  return (
    <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
      <p>{sale.orderId}</p>
      <SaleModal content={"Sale"} header={"Read"} sale={sale} />
      <SaleModal content={"Sale"} header={"Delete"} sale={sale} deleteSale={deleteSale} />
    </div>
  )
}

export default Sale