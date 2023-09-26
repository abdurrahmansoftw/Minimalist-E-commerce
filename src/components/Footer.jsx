import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <>
      <footer>
        <div className='footer-links'>
          <Link to='#'>About</Link>
          <Link to='#'>Store locator</Link>
          <Link to='#'>FAQs</Link>
          <Link to='#'>News</Link>
          <Link to='#'>Careers</Link>
          <Link to='#'>Contact Us</Link>
        </div>
        <p className='love'>
          Design &nbsp; by{' '}
          
          <a target='_blank' rel='noreferrer' style={{ color: 'white' }} href='https://github.com/abdurrahmansoftw'>
            &nbsp; AbdurRahman
          </a>
        </p>
      </footer>
    </>
  )
}

export default Footer
