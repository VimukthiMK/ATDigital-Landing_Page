import 'src/components/FAQS/faq.css'
import { useState } from 'react'

const Faq = ({ sections }) => {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index))  }

  return (
    <section className='faqbutton-container'>
      {sections.map((section, index) => (
        <div key={index}>
          <button
            className={`accordion ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleAccordion(index)}
            style={{ color: activeIndex === index ? 'var(--primary-color)' : 'black' }} // Change color based on active state
          >
            {section.title}
          </button>
          <div className="panel" style={{ maxHeight: activeIndex === index ? '1000px' : '0' }}>
            <p>{section.content}</p>
          </div>
        </div>
      ))}
    </section>
  )}
export default Faq