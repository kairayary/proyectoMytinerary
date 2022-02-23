export const initialState={
    cities:[],
    itineraries: []

}
export const actionType={
 CITIESDB: "CITIESDB",
 ITINERARIESDB: "ITINERARIESDB"
}

const reducer=(state, action)=>{
    console.log(action)
    switch (action.type) {
        case "CITIESDB":
            return{
                ...state,
                cities:action.cities
            }
        case "ITINERARIESDB":
            return{
                ...state,
                itineraries:action.itineraries
            }
        default:return state
        
    }
}
 export default reducer;