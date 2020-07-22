
export function addResource(id, name, type, tags, url){
    return {
        type: "ADD_RESOURCE",
        payload: {
            id,
            name,
            type,
            tags, 
            url,
        }
    }
}