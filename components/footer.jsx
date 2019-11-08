import React from 'react'
import Icon from './icon'

import '../assets/scss/components/footer.scss'

const Footer = () => {

  // Social networks
  const socialLinks = [
    {
      name: 'facebook',
      link: 'https://www.facebook.com/'
    },
    {
      name: 'instagram',
      link: 'https://www.instagram.com/3dmensional.agency'
    },
    {
      name: 'twitter',
      link: 'https://www.twitter.com/'
    }
  ]

  return (
    <footer>
      <div className="social-wrapper">
        { socialLinks.map((social, index) => (
          <div key={social.name + index} className="social-item">
            <a href={social.link}>
              <Icon 
                name={social.name}
              />
            </a>
          </div>
        )) }
      </div>
    </footer>
  )
}

export default Footer