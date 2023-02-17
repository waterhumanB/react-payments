import React from 'react'
import { Input } from '../../Element'

const CardExpirationDate = ({ cardExpirationDate, cardExpirationDateHandler }: CardExpirationDateProps) => {
  const { num1, num2 } = cardExpirationDate
  return (
    <div className='input-container'>
      <span className='input-title'>만료일</span>
      <div className='input-box w-50'>
        <Input id='num1' value={num1} placeholder='MM' onChange={cardExpirationDateHandler} />
        <Input id='num2' value={num2} placeholder='YY' onChange={cardExpirationDateHandler} />
      </div>
    </div>
  )
}

export default CardExpirationDate
