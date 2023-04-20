import { Person } from "./Person";

export const Persons = ({shown}) => 
  <>
    {shown.map(person => <Person key={person.name} person={person} />)}
  </>