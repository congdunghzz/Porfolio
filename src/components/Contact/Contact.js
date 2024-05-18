import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <h6>Email:</h6>
      <a
        href='#/'
        className='link footer__link'
      >
        lecongdung3010@gmail.com

      </a>
      
    </section>
  )
}

export default Contact
