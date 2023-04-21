import { Person } from "./Person";

export const Persons = ({shown, handleDelete}) => 
  <>
    {shown.map(person => <Person key={person.name} person={person} handleDelete={handleDelete}/>)}
  </>