import { useState } from 'react'

const AddCard = ({ onAdd }) => {
  const [name, setName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [limit, setLimit] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if (!name) {
      alert('Please enter name!')
      return
    }

    if (!cardNumber) {
        alert('Please enter card number!')
        return
    }

    if (!limit) {
        alert('Please enter limit!')
        return
    }

    onAdd({ name, cardNumber, limit })

    setName('')
    setCardNumber('')
    setLimit('')
  }

  return (
    <div className='col-6'>
      <p className='lead'>Add Card</p>
      <form className='form-control' onSubmit={onSubmit}>
        <div className='mt-3'>
          <label className='form-label'>Name</label>
          <input
            type='text'
            placeholder='e.g. Muhammed Salaudeen'
            value={name}
            className='form-control'
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='mt-3'>
          <label className='form-label'>Card Number</label>
          <input
            type='number'
            placeholder='e.g. 00001111222233334444'
            value={cardNumber}
            className='form-control'
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>
        <div className='mt-3'>
          <label className='form-label'>Limit</label>
          <input
            type='text'
            placeholder='e.g. 5000'
            value={limit}
            className='form-control'
            onChange={(e) => setLimit(e.target.value)}
          />
        </div>
        
        <input type='submit' value='Add' className='mt-3 btn btn-secondary' />
      </form>
    </div>
  )
}

export default AddCard