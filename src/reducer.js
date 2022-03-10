export const initialState={
    cities:[],
    itineraries:[],
    user: null,//guarda los datos de usuario que tenemos

}
export const actionType={
 CITIESDB: "CITIESDB",
 ITINERARIESDB: "ITINERARIESDB",
 USER:"USER",// indica como se envia el dato
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
            case "USER":
                return{// se crean los datos necesarios para guardar los valores del usuario en la variable
                    ...state,
                    user:action.user
                }    
        default:return state
        
    }
}
 export default reducer;