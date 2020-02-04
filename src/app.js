'use strict'

import React from 'react'
import Title from './title'

const App = React.createClass({
  render: function () {
    return (
      <div className='container'>
        <Title name='Davi' idade={39} />
      </div>
    )
  }
})

export default App
