import React from 'react';
import Home from './Home';

import house1 from '../images/house-1.jpeg';
import house2 from '../images/house-2.jpeg';
import house3 from '../images/house-3.jpeg';
import house4 from '../images/house-4.jpeg';
import house5 from '../images/house-5.jpeg';
import house6 from '../images/house-6.jpeg';

export default function Homes() {
  return (
    <section className="homes">
      <Home
        image={house1}
        name="Modern Family Home"
        price="$1,200,000"
        rooms="5"
        area="325"
        location="USA"
      />
      <Home
        image={house2}
        name="Modern Glass Villa"
        price="$2,750,000"
        rooms="6"
        area="450"
        location="Canada"
      />
      <Home
        image={house3}
        name="Cozy Country House"
        price="$850,000"
        rooms="4"
        area="250"
        location="UK"
      />
      <Home
        image={house4}
        name="Large Rustical Villa"
        price="$1,950,000"
        rooms="6"
        area="480"
        location="Portugal"
      />
      <Home
        image={house5}
        name="Majestic Palace House"
        price="$9,500,000"
        rooms="18"
        area="4230"
        location="Germany"
      />
      <Home
        image={house6}
        name="Modern Familiy Apartment"
        price="$600,000"
        rooms="3"
        area="180"
        location="Italy"
      />
    </section>
  )
}
