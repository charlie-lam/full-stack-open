import { useState } from 'react'

const Person = ({person}) => 
  <p>
    {person.name}
  </p>

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setPersons([...persons, {name: newName}])
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input onChange={handleNameChange} value={newName}/>
        </div>
        <div>
          <button type="submit" onClick={handleSubmit}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <Person key={person.name} person={person}/>)}
    </div>
  )
}

export default App