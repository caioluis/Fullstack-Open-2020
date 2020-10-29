import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({text, handleClick}) => (<div><button onClick={handleClick}>{text}</button></div>)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  let randomNumber = 0
  return (
    <div>
      {props.anecdotes[selected]}
      <Button text='next anecdote' handleClick={() => setSelected(randomNumber=(Math.round((Math.random() * (anecdotes.length-1)))))} />
      <Button text='vote' handleClick={() => votes[randomNumber] + 1} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const votes = [0,0,0,0,0,0];

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)