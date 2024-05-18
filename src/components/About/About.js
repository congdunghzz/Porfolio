import GitHubIcon from '@material-ui/icons/GitHub'
import FacebookIcon from '@material-ui/icons/Facebook';
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about
  return (
    <div className='about center'>
      <img alt='Avatar' src="https://congdunghzz.github.io/Porfolio/cv-2.jpg" className='about-avatar'/>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>A {role}.</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {resume && (
          <a href={resume}>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}
        
        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.facebook && (
              <a
                href={social.facebook}
                aria-label='facebook'
                className='link link--icon'
              >
                <FacebookIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
