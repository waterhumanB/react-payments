import { expirationDateMark } from '../../../domain/expirationdateMark'
import { markCardNumber } from '../../../domain/markCardNumber'

const CardDesign = ({ cardNumber, cardExpirationDate }: CardDesignProps) => {
  return (
    <div className='card-box'>
      <div className='empty-card'>
        <div className='card-top' />
        <div className='card-middle'>
          <div className='small-card__chip' />
        </div>
        <div className='card-bottom'>
          <div className='card-bottom__cardcardNumberberber'>
            <span className='card-text'>{markCardNumber(cardNumber)}</span>
          </div>
          <div className='card-bottom__info'>
            <span className='card-text'>NAME</span>
            <span className='card-text'>{expirationDateMark(cardExpirationDate)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardDesign
