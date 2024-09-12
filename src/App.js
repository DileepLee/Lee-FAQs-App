import Faqs from './components/Faqs'

import './App.css'

const faqsList = [
  {
    id: 0,
    questionText: 'What is HTML?',
    answerText:
      'Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.',
  },
  {
    id: 1,
    questionText: 'What is the CSS',
    answerText:
      'Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.',
  },
  {
    id: 2,
    questionText: 'What is the definition of JavaScript? ',
    answerText:
      'JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.',
  },

  {
    id: 3,
    questionText: 'What is React?',
    answerText:
      'React is a framework that employs Webpack to automatically compile React, JSX, and ES6 code while handling CSS file prefixes. React is a JavaScript-based UI development library. Although React is a library rather than a language, it is widely used in web development. The library first appeared in May 2013 and is now one of the most commonly used frontend libraries for web development.',
  },
]

const App = () => <Faqs faqsList={faqsList} />

export default App
