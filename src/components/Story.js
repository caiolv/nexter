import React from "react";
import story1 from '../images/story-1.jpeg';
import story2 from '../images/story-2.jpeg';

export default function Story() {
  return (
    <>
        <div className="story__pictures">
            <img src={story1} alt="Couple with new house" className="story__img--1" />
            <img src={story2} alt="New house" className="story__img--2" />
        </div>
        <div className="story__content">
            <h3 class="heading-3 mb-sm">Happy Costumers</h3>
            <h2 class="heading-2 heading-2--dark mb-md">&ldquo;The best decision of our lives&rdquo;</h2>
            <p className="story__text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus. Quidem consequatur harum volupta!
            </p>
            <button class="btn">Find your own home</button>
        </div>
    </>
  );
}
