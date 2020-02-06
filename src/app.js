'use strict'

import React, { Component } from 'react'
import LikeButton from './likebutton'
import SearchButton from './searchbutton'

class App extends Component {
  render () {
    return (
      <div className='container'>
        <LikeButton />
        <SearchButton />
      </div>
    )
  }
}

export default App
