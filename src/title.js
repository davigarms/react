'use strict'

import React from 'react'

const Title = ({ name, lastname, idade }) => (
  <div>
    <h1>{`Olá ${name} ${lastname}!`}</h1>
    <h2>{`${idade} anos`}</h2>
  </div>
)

Title.defaultProps = {
  name: 'Desconhecido',
  lastname: '',
  idade: 'N/A'
}

export default Title
