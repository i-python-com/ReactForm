import React from 'react'

function MainContent() {
  const date = new Date(2019, 7, 4, 16)
  const hours = date.getHours()
  let timeOfDay

  if (hours < 12) {
    timeOfDay = 'morning'
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = 'afternoon'
  } else {
    timeOfDay = 'night'
  }

  const style = { color: '#FF8C00', fontSize: 50 }
  return (
    <div>
      <h1 style={style}> Good {timeOfDay} </h1>
      <div> This is MainContent </div>{' '}
    </div>
  )
}

export default MainContent
