import React from 'react'
import Filters from '../filters/filters';
import './delivery.css';
import DeliveryCollections from './deliveryCollections/deliveryCollections';

const deliveryFilters = [
  {
    id: 1,
    icon: <i className='fi fi-rr-caret-down absolute-center'></i>,
    title: "Filters"
  },
  {
    id: 2,
    title: "Rating: 5.0+"
  },
  {
    id: 3,
    title: "Hygienic Foods"
  },
  {
    id: 4,
    title: "Pure Veg"
  },
  {
    id: 5,
    icon: <i className='fi fi-rr-caret-down absolute-center'></i>,
    title: "Delivery Time"
  },
  {
    id: 6,
    title: "Non-Veg"
  },
];

const Delivery = () => {
  return (
    <div>
      <div className='max-width'>
        <Filters filterList={deliveryFilters}/>
      </div>
      <DeliveryCollections/>
    </div>
  )
}

export default Delivery
