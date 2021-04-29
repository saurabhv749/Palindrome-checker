import React from 'react'

function Info() {
  return (
    <div className='info'>
      <p>
        A palindrome is a word or sentence that's spelled the same way both
        forward and backward, ignoring punctuation, case, and spacing.
      </p>
      <p>
        For example :
        <ul>
          <li>
            <code>"My age is 0, 0 si ega ym." is palindrome</code>
          </li>
          <li>
            <code>"1 eye for of 1 eye." is not palindrome</code>
          </li>
          <li>
            <code>"0_0 (: /-\ :) 0-0" is palindrome</code>
          </li>
          <li>
            <code>"never odd or even" is palindrome</code>
          </li>
          <li>
            <code>"race car" is palindrome</code>
          </li>
          <li>
            <code>"_eye" is also palindrome"</code>
          </li>
        </ul>
      </p>
    </div>
  )
}

export default Info
