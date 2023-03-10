
import Cointeiner from 'components/Cointeiner/Cointeiner';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';


import { useSelector, useDispatch} from "react-redux"; // імпортуємо компонент провайдер який дає доступ до глобального стану
import { addContact , deleteContacts } from "Redux/Contacts/contacts-action"
import { setFilter } from "Redux/Filter/filter-action"


const App = () => {

  const contacts = useSelector(store=>store.contacts)
  const filter = useSelector(store=>store.filter)
  // console.log(contacts)
  // const [filter, setFilter] = useState('')

  const dispatch= useDispatch()

  const isDublication = (name) => {
    const normalizeName = name.toLowerCase()
    const nameContact = contacts.find(({ name }) => {
      return (normalizeName === name.toLowerCase())
    })
    return Boolean(nameContact)
  }

  const onAddContact = ({ name, number }) => {
    if (isDublication(name)) {
      return alert(`${name} is already in contacts!`)
    }
    const action  = addContact({ name, number} )
    dispatch(action)
   
  }

  const deleteContact = id => {
   const action= deleteContacts(id)
   dispatch(action)
    console.log(action)
  }

  const onHendleFilter = ({ target }) => {
    const action= setFilter(target.value)
    dispatch(action)
  }

  const getFilteredContact = () => {
    if (!filter) return contacts;
    const normalizedFilter = filter.toLocaleLowerCase();
    const result = contacts.filter(({ name }) => {
      return (name.toLocaleLowerCase().includes(normalizedFilter))
    })
    return result
  }

  const filterContacts = getFilteredContact();

  return (
     
    <Cointeiner>
      <h2>Phonebook</h2>
      <ContactForm addContact={onAddContact} />
      <h2>Contacts</h2>
      <Filter onHendleFilter={onHendleFilter} />
      <ContactList contacts={filterContacts} deleteContact={deleteContact} />
    </Cointeiner>
    

  )

}
export default App

