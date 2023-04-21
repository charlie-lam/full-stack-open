import { useState, useEffect } from 'react'
import { Persons } from './Persons'
import { Filter } from './Filter'
import { PersonForm } from './PersonForm'
import axios from 'axios'
import { getAll } from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    getAll()
      .then(persons => {
        setPersons(persons)
      })
  }, [])

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
      const newPerson = {name: newName, number: newNumber}
      setNewName('')
      setNewNumber('')
      axios
        .post('http://localhost:3001/persons', newPerson)
        .then(response => setPersons([...persons, response.data]))
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