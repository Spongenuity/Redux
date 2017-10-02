import React from 'react'
import FilterLink from '../containers/FilterLink'
import { ButtonGroup, Button } from 'react-bootstrap'

const Footer = () => (
  <div>
  <ButtonGroup>
    <Button> <FilterLink filter="SHOW_ALL"> All</FilterLink></Button>
    <Button><FilterLink filter="SHOW_ACTIVE">Active</FilterLink></Button>
    <Button> <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink></Button>
  </ButtonGroup>
  </div>
)

export default Footer
