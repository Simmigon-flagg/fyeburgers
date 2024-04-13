import React from 'react'

const Orders = ({items}) => {
  return (
    <div>{items.map((item)=> (
    <>
    <p onScroll={true}>{item.name}</p>
    <hr />
    </>
    ))}</div>
  )
}

export default Orders