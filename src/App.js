import React, {useState} from 'react';
import './App.css';
import { useSelector } from "react-redux"
import { selectDevelopers, developersWithThisFavorite } from "./store/developers/selectors"
import {selectResources} from "./store/resources/selector"
import { developersResources } from "./store/selector"
import PleaseWork from "./components/ResourceSection"
import AddResourceForm from "./components/AddResourceForm"



function App() {
const [clickedId, set_ClickedId] = useState("")
const [resourceNeeded, set_ResourceNeeded] = useState("")
const developers = useSelector(selectDevelopers)
//  console.log("developers test", developers)
const resources = useSelector(selectResources)
//  console.log("resource test", resources)
const theseDevelopersLike = useSelector(developersWithThisFavorite(clickedId))
// console.log("favorite developers test", theseDevelopersLike)
const developerFavorite = useSelector(developersResources(resourceNeeded))
// console.log("Did we get it test", developerFavorite)


const stats = {
  numDevelopers: developers.length,
  numResources: resources.length
}
// console.log("stats test", stats)

const resourceNames = resources.map(resource => {
  return (
          <option 
            key={resource.id} 
            value={resource.id}>
              {resource.name}
          </option>
  )
})
// console.log("resources name test", resourceNames)

const developerNames = developers.map(developer => {
  return (
          <option 
            key={developer.id} 
            value={developer.id}>
              {developer.name}
          </option>
  )
})

// const displayUserLoggedIn = loggedInUser.map(user => {
//   return (
//     <p
//     style={{
//       margin: "-1rem 0 2rem 0",
//       padding: "0.5rem"
//     }}
//   >
//     Welcome Back ,{user.name}!
//   </p>
//   )
// })

function resourceClicked(event){
  set_ClickedId(parseInt(event.target.value))
}
// console.log("event test outside", clickedId)
function developerClicked(event){
  set_ResourceNeeded(parseInt(event.target.value))
}
// console.log("event test outside", resourceNeeded)

const displayTheseDevelopers = theseDevelopersLike.map(developer => {
  return (
        <li key={developer.id}>{developer.name}</li>
  )
})
const displayTheseResources = developerFavorite.map(fav => {
  return (
      <li key={fav.id}>{fav.name}</li>
  )
})


  return (
    <div className="App">
      <header className="App-header">
        {/* {displayUserLoggedIn} */}
        <h1>Web development resources</h1>
            <AddResourceForm />
          <h3>{stats.numDevelopers}</h3>
              <p>Developers</p>
          <h3>{stats.numResources}</h3>
              <p>Resources</p>
            <select onChange={resourceClicked}>
              <option>--Choose Resource--</option>
              {resourceNames}
            </select>
            <ul>
              {displayTheseDevelopers}
            </ul>
            <select onChange={developerClicked}>
              <option>--Choose Developer--</option>
              {developerNames}
            </select>
            <ul>
              {displayTheseResources}
            </ul>
      </header>
      <PleaseWork />
    </div>
  );
}

export default App;
