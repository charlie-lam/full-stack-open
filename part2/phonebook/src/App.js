import { useState } from 'react'
import { Persons } from './Persons'
import { Filter } from './Filter'
import { PersonForm } from './PersonForm'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const shown = persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    
    if(persons.some(person => person.name === newName)){
      alert(`${newName} is already added to phonebook`)
    }
    else {
      setPersons([...persons, {name: newName, number: newNumber}])
      setNewName('')
      setNewNumber('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter  handleFilterChange={handleFilterChange} newFilter={newFilter}/>
      <h3>Add a new</h3>
      <PersonForm 
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange} 
        handleSubmit={handleSubmit} 
        newName={newName}
        newNumber={newNumber}
      />
      <h3>Numbers</h3>
      <Persons shown={shown} />
    </div>
  )
}

export default App