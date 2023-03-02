import { ADD_CONTACTS, DELETE_CONTACT } from "./contacts-types";

const initialStore = []

const contactsReducer = (state = initialStore, action) => {  // створюємо редюсер яке повнртає початкове  значення де стейт це початкове значення  тобто те що зберігається в initialStore

   switch (action.type) {                            // перевіряємо  action.type  
      case ADD_CONTACTS:                            // якщо action.type   ===  ADD_CONTACTS
 return [...state , action.payload]
      case DELETE_CONTACT:
         return state.filter(item => item.id !== action.payload) 
      default:
         return state
   }
}

export default contactsReducer

// const reducer = (state = initialStore, action) =>  ===де action  payload з action.js тобто де є type і payload