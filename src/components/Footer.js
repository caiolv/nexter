import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
        <ul class="nav">
          <li class="nav__item"><a href="/" class="nav__link">Find your dream home</a></li>
          <li class="nav__item"><a href="/" class="nav__link">Request proposal</a></li>
          <li class="nav__item"><a href="/" class="nav__link">Download home planner</a></li>
          <li class="nav__item"><a href="/" class="nav__link">Contact us</a></li>
          <li class="nav__item"><a href="/" class="nav__link">Submit your property</a></li>
          <li class="nav__item"><a href="/" class="nav__link">Come work with us</a></li>
        </ul>
        <p class="copyright">
          &copy; Copyright 2017 by Jonas Schmedtmann. Feel free to use this project for your own purposes.
          This does NOT apply if you plan to produce your own course or tutorials based on this project.
        </p>
    </footer>
  )
}
