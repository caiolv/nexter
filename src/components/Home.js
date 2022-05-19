import React from 'react';
import sprite from '../images/sprite.svg';

export default function Home({ image, name, price, rooms, area, location }) {
  return (
    <div class="home">
    <img src={image} alt="House 1" class="home__img" />
    <svg className="home__link">
      <use href={sprite + "#icon-heart-full"}></use>
    </svg>
    <h5 class="home__name">{name}</h5>
    <div class="home__location">
      <svg>
        <use href={sprite + "#icon-map-pin"}></use>
      </svg>
      <p>{location}</p>
    </div>
    <div class="home__rooms">
      <svg>
        <use href={sprite + "#icon-profile-male"}></use>
      </svg>
      <p>{rooms} rooms</p>
    </div>
    <div class="home__area">
      <svg>
        <use href={sprite + "#icon-expand"}></use>
      </svg>
      <p>{area} m<sup>2</sup></p>
    </div>
    <div class="home__price">
      <svg>
        <use href={sprite + "#icon-key"}></use>
      </svg>
      <p>{price}</p>
    </div>
    <button class="cta">Contact realtor</button>
  </div>
  )
}
