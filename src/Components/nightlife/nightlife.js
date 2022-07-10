import React from 'react'
import Collections from '../collections/collections';
import { nightlife } from '../../Data/nightlife';
import Filters from '../filters/filters';
import './nightlife.css';
import ExploreSection from '../exploreSection/exploreSection';

const nightFilters = [
  {
    id: 1,
    title: "Fliters",
    icon: <i class="fi fi-rs-filter"></i>,
  },
  {
    id: 2,
    title: "Fliters",
    icon: <i class="fi fi-rs-filter"></i>,
  },
  {
    id: 3,
    title: "Fliters",
    icon: <i class="fi fi-rs-filter"></i>,
  },
  {
    id: 4,
    title: "Fliters",
  },
  {
    id: 5,
    title: "Fliters",
  },
];

const collectionList = [
  {
    id: 1,
    title: "Best of Kolkata",
    cover: "https://b.zmtcdn.com/data/collections/712ee166f48312fa572eac04f5b71d59_1615435760.jpg",
    places: "60 places"
  },
  {
    id: 2,
    title: "Brilliant Biryani",
    cover: "https://b.zmtcdn.com/data/collections/d66334f10b958a3ca6df9f4e4d7a881c_1631862999.jpg",
    places: "30 places"
  },
  {
    id: 3,
    title: "Aromatic Coffee",
    cover: "https://b.zmtcdn.com/data/collections/2e0b63986e33036c45cf17fef3a740ac_1611749485.jpg",
    places: "29 places"
  },
  {
    id: 4,
    title: "Street Food",
    cover: "https://b.zmtcdn.com/data/collections/4c59b895acfa4879b87f6c1d81ca5855_1615437858.jpg",
    places: "24 places"
  },
  {
    id: 5,
    title: "Street Food",
    cover: "https://b.zmtcdn.com/data/collections/4c59b895acfa4879b87f6c1d81ca5855_1615437858.jpg",
    places: "24 places"
  },
  {
    id: 6,
    title: "Street Food",
    cover: "https://b.zmtcdn.com/data/collections/4c59b895acfa4879b87f6c1d81ca5855_1615437858.jpg",
    places: "24 places"
  },
  {
    id: 7,
    title: "Street Food",
    cover: "https://b.zmtcdn.com/data/collections/4c59b895acfa4879b87f6c1d81ca5855_1615437858.jpg",
    places: "24 places"
  },
  {
    id: 8,
    title: "Street Food",
    cover: "https://b.zmtcdn.com/data/collections/4c59b895acfa4879b87f6c1d81ca5855_1615437858.jpg",
    places: "24 places"
  },
  {
    id: 9,
    title: "Street Food",
    cover: "https://b.zmtcdn.com/data/collections/4c59b895acfa4879b87f6c1d81ca5855_1615437858.jpg",
    places: "24 places"
  },
  {
    id: 10,
    title: "Street Food",
    cover: "https://b.zmtcdn.com/data/collections/4c59b895acfa4879b87f6c1d81ca5855_1615437858.jpg",
    places: "24 places"
  }
];

const nightList = nightlife;

const NightLife = () => {
  return (
    <div>
      <Collections List={collectionList}/>
      <div className='max-width'>
        <Filters filterList={nightFilters}/>
      </div>
      <ExploreSection List={nightList} collectionName='Nightlife Restaurants in Kolkata'/>
    </div>
  )
}

export default NightLife