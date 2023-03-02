import { combineReducers } from "redux";

import contactsReducer from "Redux/Contacts/contacts-reducer";
import filtrReducer from "Redux/Filter/filter-reducer";

const rootReducer = combineReducers({
   contacts:contactsReducer ,
   filter:filtrReducer
})

export default rootReducer

// import { combineReducers } from "redux"; === обєднує два редюсири істворює нам повню структуру сторе  і він запамятовує що за частинку contacts відповідає  contactsReducer