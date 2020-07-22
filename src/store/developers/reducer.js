const initialState = [
    {
        id: 1,
        name: "Kelley",
        website: "https;//hi-im-kelley.netlify.com",
        favorites: [2 , 3 , 4 , 5],
    },
    {
        id: 2,
        name: "Darian",
        website: "zamalekDarian@netlify.com",
        favorites: [1],
    },
    {
        id: 3,
        name: "Spiro",
        website: "spiroTheGreekGod@godThings.com",
        favorites: [1 , 2 , 3 , 4 , 5 , 6],
    }
]

function toggle(list, element){
  if(list.includes(element)) {
    return list.filter(el => el !== element)
  } else {
    return [...list, element]
  }
}

export default function developersSliceReducer(state = initialState, action) {
    switch (action.type) {
      case "TOGGLE_FAVORITE": {
        const {developerId, resourceId} = action.payload

        return state.map(developer => {
          if (developer.id === developerId){
            return {
              ...developer,
              favorites: toggle(developer.favorites, resourceId)
            }
          } else {
            return developer
          }
        })
      }
      default: {
        return state;
      }
    }
  }