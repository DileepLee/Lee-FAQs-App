import FaqItem from '../FaqItem'
import './index.css'

const Faqs = ({faqsList}) => (
  <div className="faqs-container">
    <h1 className="faqs-heading">FAQs</h1>
    <ul className="faqs-list">
      {faqsList.map(faq => (
        <FaqItem key={faq.id} faq={faq} />
      ))}
    </ul>
    <p className="php">Created by Lee</p>
  </div>
)

export default Faqs
