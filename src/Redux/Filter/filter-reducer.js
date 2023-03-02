import { SET_FILTER} from "./filter-types";

const initialStore = ''

const filtrReducer = (state = initialStore, action) => {  // створюємо редюсер яке повнртає початкове  значення де стейт це початкове значення  тобто те що зберігається в initialStore
   
   switch (action.type) {   // перевіряємо  action.type  
    
      case SET_FILTER:
         return action.payload 
      default:
         return state
   }
}

export default filtrReducer

// const reducer = (state = initialStore, action) =>  ===де action  payload з action.js тобто де є type і payload

