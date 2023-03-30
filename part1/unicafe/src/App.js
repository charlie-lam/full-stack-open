import { useState } from 'react'

const Button = ({onClick, text}) => {
  return(
    <button onClick={onClick}>{text}</button>
  )
}

const StatisticLine = ({text, value}) => {
  return(
    <p>{text} {value}{text === 'positive' && '%'}</p>
  )
}

const Statistics = ({good, bad, neutral}) => {

  let all = good + bad + neutral
  let average = (good - bad) / all
  let positive = good*100 / all

  return(
    <>
      {all === 0 
      ? <p>No feedback given</p>
      : <>
          <StatisticLine value={good} text={'good'} />
          <StatisticLine value={neutral} text={'neutral'} />
          <StatisticLine value={bad} text={'bad'} />
          <StatisticLine value={all} text={'all'} />
          <StatisticLine value={average} text={'average'} />
          <StatisticLine value={positive} text={'positive'} />
        </>
      }
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>give feeback</h2>
      <Button onClick={() => setGood(good + 1)} text={'good'} />
      <Button onClick={() => setNeutral(neutral + 1)} text={'neutral'} />
      <Button onClick={() => setBad(bad + 1)} text={'bad'} />
      <h2>statistics</h2>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App