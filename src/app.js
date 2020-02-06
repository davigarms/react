'use strict'

import React, { Component } from 'react'
import Title from './title'
import Square from './square'

class App extends Component {
  render () {
    return (
      <div className='container'>
        <Title name='Davi' idade={39} />

        {['blue', 'red', 'blue'].map((color, index) => (
          <Square key={index} color={color} />
        ))}

        <Square />
      </div>
    )
  }
}

export default App
