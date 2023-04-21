export const Person = ({person, handleDelete}) =>
  <>
    <p>{person.name} {person.number}</p>
    <button type="button" onClick={() => handleDelete(person)}  >Delete</button>
  </>