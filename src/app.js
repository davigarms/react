'use strict'

import React, { Component } from 'react'
import Title from './title'
import Square from './square'

class App extends Component {
  render () {
    return (
      <div className='container'>
        <Title name='Davi' idade={39} />

        {['blue', 'red', 'green'].map((color) => (
          <Square key={color} color={color} />
        ))}
      </div>
    )
  }
}

export default App
