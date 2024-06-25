import { useState } from 'react'
import Posts from './Posts'
import './App.css'

function App() {


  return (
    <>
      
      <h2>React Core Concepts</h2>
      <ol>
        <li>Components</li>
        <li>JSX</li>
        <li>Props</li>
        <li>Event Handler</li>
        <li>State</li>
        <li>Load Data</li>
      </ol>
      <hr />
      <Posts></Posts>
    </>
  )
}

export default App
