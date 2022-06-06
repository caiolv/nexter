import React from 'react';
import realtor1 from '../images/realtor-1.jpeg';
import realtor2 from '../images/realtor-2.jpeg';
import realtor3 from '../images/realtor-3.jpeg';

function Realtor({name, housesSold, picture}) {
  return (
    <>
      <img src={picture} alt={`${name} - Realtor`} class="realtors__img" />
      <div class="realtors__details">
        <h4 class="heading-4 heading-4--light">{name}</h4>
        <p class="realtors__sold">{housesSold} houses sold</p>
      </div>
    </>
  );
}

export default function Realtors() {
  return (
      <div className="realtors">
        <h3 class="heading-3">Top 3 Realtors</h3>
        <div class="realtors__list">
          <Realtor name="Erik Feinman" housesSold="245" picture={realtor1} />
          <Realtor name="Kim Brown" housesSold="212" picture={realtor2} />
          <Realtor name="Toby Ramsey" housesSold="198" picture={realtor3} />
        </div>
      </div>
  )
}
