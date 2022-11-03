import React from 'react'
import Card from '../../shared/components/UIElements/Card'

const ViewBookingItem = (props) => {
  return (
    <React.Fragment>
      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__info">
            <h2>Customer Name: {props.name}</h2>
            <h3>Price: {props.price}</h3>
            <p>Booked Date: {props.date}</p>
          </div>
        </Card>
      </li>
    </React.Fragment>
  )
}

export default ViewBookingItem