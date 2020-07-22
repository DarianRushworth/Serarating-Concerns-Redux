import React, {useState} from "react"
import { useSelector } from "react-redux"
import { selectResources } from "../store/resources/selector"
import { addResource } from "../store/resources/actions"
import {useDispatch} from "react-redux"


export default function AddResourceForm(){
    const dispatch = useDispatch()
    const [id, set_Id] = useState("")
    const [name, set_Name] = useState("")
    const [type, set_Type] = useState("")
    const [tags, set_Tags] = useState("")
    const [url, set_Url] = useState("")
    const resources = useSelector(selectResources)

    const displayTypes = resources.map(resource => {
        return (
                <option key={resource.id} value={resource.type}>{resource.type}</option>
    )})

    const onSubmit = (event) => {
        event.preventDefault()
        
        dispatch(addResource(id, name, type, tags.split(/[, ]+/), url))

        set_Id((resources.length + 1))
        set_Name("")
        set_Type("")
        set_Tags("")
        set_Url("")
    }
    
    return(
        <div>
            <form onSubmit={onSubmit}>
            <label>Name of Resource:
            <input type="text" value={name}
            onChange={event => set_Name(event.target.value)}
            />
            </label>
            <select value={type} onChange={event => set_Type(event.target.value)}>
                <option>--Choose Type--</option>
                {displayTypes}
            </select>
            <label>Tags:
            <input type="text" value={tags}
            onChange={event => set_Tags(event.target.value)}/>
            </label>
            <label>URL:
            <input type="text" value={url}
            onChange={event => set_Url(event.target.value)}/>
            </label>
            <button type="submit">submit</button>
            </form>
        </div>
    )
}