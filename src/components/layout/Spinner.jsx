import React from 'react'

function Spinner() {
  return (
    <div className='w-100 mt-20'>
      <img 
        width={180}
        className='text-center mx-auto'
        src="assets/spinner.gif"
        alt='Loading...'
      />
    </div>
  )
}

export default Spinner