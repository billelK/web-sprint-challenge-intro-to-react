import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  // ❗ Create state to hold the data from the API 
  const [starWarsData, setStarWarsData] = useState([])
  // ❗ Create effects to fetch the data and put it in state
 useEffect( () => {
  async function fetchStarWarsData() {
    let planets = (await axios.get(urlPlanets)).data
    let people = (await axios.get(urlPeople)).data
    Promise.all([planets,people])
      .then( res => {
        res[1].forEach( person => {
          res[0].forEach (planet => {
            if (planet.id === person.homeworld) {
              person.homeworld = {id: planet.id, name: planet.name}
            }
          })
        })
        setStarWarsData(people)
      })
      .catch(error => console.log(error.message)) 
  }
  fetchStarWarsData()
 },[])
  
  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */}
      {starWarsData.map(char => <Character key = {char.id} charsData = {char}/>)}
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
