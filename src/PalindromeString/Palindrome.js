import React from 'react'

function Palindrome() {
  const [str, setstr] = React.useState('React')

  const [ans, setans] = React.useState(false)

  function palindrome(temp) {
    temp = temp.toUpperCase()
    var reg = /[^:\s+.;'*#_,-\/()]/gi
    var strarr = temp.match(reg)
    console.log(strarr)
    for (let i = 0, j = strarr.length - 1; i <= j; i++, j--) {
      if (strarr[i] !== strarr[j]) {
        setans(false)
        return 0
      }

      if (i === j) setans(true)
    }
  }

  function handlechange(e) {
    setstr(e.target.value)
  }
  return (
    <div>
      <div className='palincheck'>
        <input
          type='text'
          name='string'
          value={str}
          placeholder='Enter String to check'
          onChange={handlechange}
        />
        <button onClick={() => palindrome(str)}>Check</button>
      </div>

      <span className='result'>
        {ans ? "  Yes ! it's palindrome  " : "  Nope ? it's  not palindrome"}
      </span>
    </div>
  )
}

export default Palindrome
