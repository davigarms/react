'use strict'

import React from 'react'

const Title = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'desconhecido',
      lastname: '',
      idade: 'N/A'
    }
  },
  render: function () {
    return (
      <div>
        <h1>Olá {this.props.name} {this.props.lastname}!</h1>
        <h2>{this.props.idade} anos</h2>
      </div>
    )
  }
})

export default Title
