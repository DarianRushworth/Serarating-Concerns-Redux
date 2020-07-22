const initialState = [
{
    id: 1,
    name: "React",
    type: "library",
    tags: ["ui" , "jsx" , "virtual-dom" , "components" , "popular"],
    url: "http://reactjs.org",
},
{
    id: 2,
    name: "Alpine",
    type: "library",
    tags: ["ui" , "vanilla-js" , "new"],
    url: "http://github.com/aplinejs/apline",
},
{
    id: 3,
    name: "Zdog",
    type: "library",
    tags: ["3d" , "svg" , "graphics"],
    url: "http://zzz.dog",
},
{
    id: 4,
    name: "AST explorer",
    type: "tool",
    tags: ["babel" , "online"],
    url: "http://astexplorer.net",
},
{
    id: 5,
    name: "Observable",
    type: "website",
    tags: ["d3" , "community" , "notebooks" , "graphics"],
    url: "http://obserablehq.com",
},
{
    id: 6,
    name: "unDraw",
    type: "resource	",
    tags: ["sketches" , "svg" , "graphics"],
    url: "http://undraw.co/illustrations",
}]

export default function resourcesSliceReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_RESOURCE": {
            return [...state, action.payload]
        }
      default: {
        return state;
      }
    }
  }