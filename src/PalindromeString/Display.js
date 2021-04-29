import React from 'react'
import Info from './Info'
import Palindrome from './Palindrome'
import Header from './Header'
import Footer from './Footer'

function Display() {
  return (
    <div id='container'>
      <Header />
      <Info />
      <Palindrome />
      <Footer />
    </div>
  )
}

export default Display
