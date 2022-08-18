import React from 'react'

export default function Footer() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <footer id='footer'>
      <p>Copyright &copy; 2022. All Rights Reserved</p>
      <p>Email: huntersteffner@gmail.com</p>
      <p>LinkedIn: <i class="fa fa-linkedin-square"></i></p>
    </footer>
  )
}
