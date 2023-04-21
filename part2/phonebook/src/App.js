import { useState, useEffect } from 'react'
import { Persons } from './Persons'
import { Filter } from './Filter'
import { PersonForm } from './PersonForm'
import { create, deletePerson, getAll } from './services/persons'

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
      .catch(error => {
        console.log('fail')
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
      create(newPerson)
        .then(person => setPersons([...persons, person]))
        .catch(error => {
          console.log('fail')
        })
    }
  }

  const handleDelete = (person) => {
    if(window.confirm(`Delete ${person.name}?`)){
      deletePerson(person.id)
        .then(res => console.log(`${person.name} deleted`))
        .catch(error => {
          console.log('fail')
        })
      setPersons(persons.filter(e => e.id !== person.id))
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
      <Persons shown={shown} handleDelete={handleDelete} />
    </div>
  )
}

export default App