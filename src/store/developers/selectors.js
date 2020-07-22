export const selectDevelopers = state => {
    return state.developers;
  };

export const developersWithThisFavorite = clickedId => state => {
  return state.developers.filter(developer => developer.favorites.includes(clickedId))
}

export const developersResources = resourceNeeded => state => {
  const developer = state.developers.find(developer => developer.id === resourceNeeded)
  if(!developer){
    return []
  } else{
  return state.resources.filter(resource => {
    return developer.favorites.includes(resource.id)
  })
}}

export const selectLoggedInUser = state => {
  return state.developers.find(developer => developer.id === state.user.id)
}