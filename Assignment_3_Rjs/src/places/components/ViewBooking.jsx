import React from 'react'
import ViewBookingItem from './ViewBookingItem'

const ViewBooking = (props) => {
console.log(props.bookData)

const Bookings = props.bookData.concat(
   {
      name: 'Aadeelh',
      price: 999,
      date: '25th Oct 2022'
   },
   
)

console.log(Bookings)
  return (
    <ul className="place-list">
      {Bookings.map(item => (
        <ViewBookingItem
        name = {item.name}
        price = {item.price}
        date = {item.date}
        />
      ))}
    </ul>
  )
}

export default ViewBooking