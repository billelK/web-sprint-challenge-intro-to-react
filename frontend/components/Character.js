import React from 'react'
import {useState} from 'react'

function Character(props) { // ❗ Add the props
  const {charsData} = props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  const [homeworld,setHomeworld] = useState(false)
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  const handleClick = () => {
    setHomeworld(!homeworld)
  }
  return (
    <div onClick={handleClick} className='character-card'>
      {/* Use the same markup with the same attributes as in the mock */}
      <h3 className='character-name'>{charsData.name}</h3>
      {homeworld && <p> Planet: <span className='character-planet'>{charsData.homeworld.name}</span></p>} 
    </div>
  )
}

export default Character
