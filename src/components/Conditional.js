import React from 'react'

function Conditional(props) {
  return (
    <div>
      <h1>Navbar</h1>

      {props.isLoading ? <div>Loading</div> : <div>New data</div>}

      <h1>Footer</h1>
    </div>
  )
}

export default Conditional
