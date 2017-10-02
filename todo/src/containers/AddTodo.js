import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { Form, Button, FormGroup, InputGroup, FormControl } from 'react-bootstrap'

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <Form onSubmit={e => {e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>

        <input ref={node => {input = node}} />

        <Button type="submit" bsSize="small">Add Todo</Button>
      </Form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
