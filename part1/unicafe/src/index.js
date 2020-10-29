import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => <h1>{props.text}</h1>;

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}  
    </button>
  )
}

const Statistic = ({name, value}) => {
  return (
      <tr>
        <td>{name}:</td>
        <td>{value}</td>
      </tr>
  )
}

const Statistics = ({good, neutral, bad}) =>{
  const all = good + neutral + bad;
  const average = ((good + (neutral * 0) + (bad * -1)) / all);
  const goodPercentage = (good / all) * 100;
    return (all == 0) ? (<p>No feedback given</p>) : (
    <div>
      <table>
        <tbody>
          <Statistic name='good' value={good} />
          <Statistic name='neutral' value={neutral} />
          <Statistic name='bad' value={bad} />
          <Statistic name='all' value={all} />
          <Statistic name='average' value={average} />
          <Statistic name='positive' value={goodPercentage + '%'}/>
        </tbody>
      </table>
    </div>
    )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Header text='give feedback'/>
      <Button onClick={() => setGood(good + 1)} text='good'/>
      <Button onClick={() => setNeutral(neutral + 1)} text='neutral'/>
      <Button onClick={() => setBad(bad + 1)} text='bad'/>
      <Header text='statistics'/>
      <Statistics good={good} neutral={neutral} bad={bad} /> 
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)