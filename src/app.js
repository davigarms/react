'use strict'

import React, { Component } from 'react'
import Title from './title'

class App extends Component {
  render () {
    return (
      <div className='container'>
        <Title name='Davi' idade={39} />
      </div>
    )
  }
}

export default App
