import React from 'react'
import loading from './Sun watch.gif'
export default function Spinner() {
  return (
    <div style={{textAlign: 'center',width: '100%', marginTop: '50px', marginBottom: '50px'}}>
      <img src={loading} alt='loading...'/>
    </div>
  )
}



