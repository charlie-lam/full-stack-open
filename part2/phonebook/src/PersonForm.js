export const PersonForm = ({handleNameChange, handleNumberChange, handleSubmit, newName, newNumber}) => 
  <>
    <form>
      <div>
        name: <input onChange={handleNameChange} value={newName}/>
      </div>
      <div>
        number: <input onChange={handleNumberChange} value={newNumber}/>
      </div>
      <div>
        <button type="submit" onClick={handleSubmit}>add</button>
      </div>
    </form>
  </>