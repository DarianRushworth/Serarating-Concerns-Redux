import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectResources } from "../store/resources/selector"
import { selectLoggedInUser } from "../store/developers/selectors"
import { toggleFavorite } from "../store/developers/actions"

export default function PleaseWork(){
    const dispatch = useDispatch()
    const resources = useSelector(selectResources)
    const user = useSelector(selectLoggedInUser)
    console.log("user logged in test", user) 
    

    
    const displayResources = resources.map(resource => {
        const toggle = () => {
            dispatch(toggleFavorite(user.id, resource.id))
        }
        const userFavorites = () =>{
            const theseAreThefavs = user.favorites
            console.log("these may help test", theseAreThefavs)
            // .include(resource.id)? "♥" : "♡"
            const resourcesIncluded = theseAreThefavs.includes(resource.id)
            return (resourcesIncluded
                        ? "♥"
                        : "♡"
            )}
        console.log("fav test", userFavorites())
        
        return  (
        
                <div key={resource.id}>
                    <h3>{resource.name}</h3>
                    <h5>{resource.library}</h5>
                    <a href={resource.url}>Find our more at: {resource.url}</a>
                <ul>
                    {resource.tags.map((tag, i) => {
                        return (
                                <li key={i}>{tag}</li>
                        )
                    })}
                </ul>
                <button onClick={toggle}>{userFavorites()}</button>
                </div>
    )})
    return (
        <div>
            {displayResources}
        </div>
    )
}