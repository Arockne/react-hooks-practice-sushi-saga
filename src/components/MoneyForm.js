import React, { useState } from 'react'

function MoneyForm( { onAddingMoney }) {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    amount: ''
  })

  function handleFormChange(event) {
    const {name, value} = event.target
    setFormData({ ...formData, [name]: value })
  }

  function handleSubmit(event) {
    event.preventDefault()
    onAddingMoney(formData.amount)
    setFormData({
      name: '',
      number: '',
      amount: ''
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>Name: </label>
      <input 
        id='name' 
        name='name' 
        type='text'
        value={formData.name}
        onChange={handleFormChange}
        />
      <label htmlFor='number'>Number: </label>
      <input 
        id='number' 
        name='number' 
        type='text'
        value={formData.number}
        onChange={handleFormChange}
        />
      <label htmlFor='amount'>Amount: </label>
      <input 
        id='amount' 
        name='amount' 
        type='text'
        value={formData.amount}
        onChange={handleFormChange}
      />
      <input type='submit' value='Add Cash Amount'/>
    </form>
  )
}

export default MoneyForm