import React from 'react'
import { HeadbarStyled } from './style'

const Headbar = ({title,icon=null}) => {
  return (
    <HeadbarStyled>
        <p className="title">{title}</p>
        {
            icon&&(<img src={icon} alt="" />)
        }
        
    </HeadbarStyled>
  )
}

export default Headbar