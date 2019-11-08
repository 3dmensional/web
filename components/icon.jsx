import React from 'react'
import ReactSVG from 'react-svg'
import '../assets/scss/components/icon.scss'

const iconsPath = '/images/icons'

const Icon = (props) => {
  return (
    <React.Fragment>
      <ReactSVG
        style={{
          height: props.size || 0,
          width: props.size || 0
        }}
        className={`icon ${props.type ? 'icon-' + props.type : ''}`}
        src={`${iconsPath}/${props.name}.svg`}
      />
    </React.Fragment>
  )
}



export default Icon