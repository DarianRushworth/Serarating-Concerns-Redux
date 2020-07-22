export const developersResources = resourceNeeded => state => {
    const developer = state.developers.find(developer => developer.id === resourceNeeded)
    if(!developer){
      return []
    } else{
    return state.resources.filter(resource => {
      return developer.favorites.includes(resource.id)
    })
  }}
