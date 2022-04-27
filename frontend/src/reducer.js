export const initialState = {
    cities: [],
    itineraries: [],
    user: null,//guarda los datos de usuario que tenemos
    filterCity:[],
}
export const actionType = {
    CITIESDB: "CITIESDB",
    ITINERARIESDB: "ITINERARIESDB",
    USER: "USER",// indica como se envia el dato
    FILTER:"FILTER",
}

const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case "CITIESDB":
            return {
                ...state,
                cities: action.cities,
                filterCity:action.cities// guarda al cargar la base de datos
            }
        case "ITINERARIESDB":
            return {
                ...state,
                itineraries: action.itineraries
            }
        case "USER":
            return {// se crean los datos necesarios para guardar los valores del usuario en la variable
                ...state,
                user: action.user
            }
        case "FILTER":
            const filterCity =[]
            if(action.value.filterBy ==="Select the City"){
               filterCity.push(...state.cities.filter(city=>city.name.toLowerCase().startsWith(action.value.value.toLowerCase().trim()))
               )}else{
                   filterCity.push(...state.cities.filter(city=>city.continents.toLowerCase().startsWith(action.value.value.toLowerCase().trim()))
                   )
               }
            return {// se crean los datos necesarios para guardar los valores del usuario en la variable
                ...state,
                filterCity:filterCity
            }
        default: return state

    }
}
export default reducer;