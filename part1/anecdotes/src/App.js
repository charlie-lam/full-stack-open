import { useState } from 'react'

const Button = ({onClick, text}) => {
  return(
    <button onClick={onClick}>{text}</button>
  )
}

const AnecdoteDisplay = ({anecdote, anecdoteVotes}) => {
  return(
    <>
    <p>{anecdote}</p>
    <p>has {anecdoteVotes} votes</p>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)

  const [votes, setVotes] = useState(anecdotes.map(e => 0))

  const changeAnecdote = () => {
    let index = Math.floor(Math.random()*anecdotes.length)
    setSelected(index)
  }

  const addVote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  const mostVotedIndex = votes.indexOf(Math.max(...votes))

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <AnecdoteDisplay anecdote={anecdotes[selected]} anecdoteVotes={votes[selected]} />
      <Button onClick={changeAnecdote} text={'next anecdote'} />
      <Button onClick={addVote} text={'vote'} />
      <h2>Anecdote with the most votes</h2>
      <AnecdoteDisplay anecdote={anecdotes[mostVotedIndex]} anecdoteVotes={votes[mostVotedIndex]}/>
    </div>
  )
}

export default App