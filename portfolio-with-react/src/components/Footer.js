import React from 'react'

export default function Footer() {
  // Footer at the bottom of each page
  let year =  new Date().getFullYear()
  return (
    <footer id='footer'>
      <p>Copyright &copy; {year}. All Rights Reserved</p>
      <p>Email: huntersteffner@gmail.com</p>
      <p>LinkedIn: <a target="_blank" href="https://www.linkedin.com/in/matthew-hunter-steffner-84b56a113/"><i class="fa fa-linkedin-square"></i></a> </p>
      <p>GitHub: <a target="_blank" href="https://github.com/huntersteffner"><i class="fa fa-github"></i></a> </p>
    </footer>
  )
}
