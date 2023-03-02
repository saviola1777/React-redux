import { ADD_CONTACTS , DELETE_CONTACT } from "./contacts-types"
import { nanoid } from "nanoid"

export const addContact = payload =>{
   return{
      type:ADD_CONTACTS ,
      payload:{
         id:nanoid() ,
         ...payload
      } ,
}}

export const deleteContacts = payload =>{
   return{
      type:DELETE_CONTACT,
      payload ,
   }
 }