// Write your code here.
import {useState} from 'react'
import './index.css'

const FaqItem = ({faq}) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleFaq = () => {
    setIsExpanded(prevState => !prevState)
  }

  return (
    <li className="faq-item">
      <div className="faq-question">
        <h2>{faq.questionText}</h2>
        <button
          type="button"
          className="toggle-button shadow-lg"
          onClick={toggleFaq}
        >
          <img
            src={
              isExpanded
                ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
            }
            alt={isExpanded ? 'minus' : 'plus'}
            className="toggle-icon"
          />
        </button>
      </div>
      {isExpanded && <p className="faq-answer">{faq.answerText}</p>}
    </li>
  )
}

export default FaqItem
