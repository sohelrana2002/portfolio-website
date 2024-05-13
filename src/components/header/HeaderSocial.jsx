import React from 'react'
import {FaFacebook, FaYoutube} from 'react-icons/fa'
import {ImLinkedin} from 'react-icons/im'
import {BiLogoInstagramAlt} from 'react-icons/bi'

const HeaderSocial = () => {
  return (
    <div className='header_social'>
        <a href="#"><FaFacebook /></a>
        <a href="#"><ImLinkedin /></a>
        <a href="#"><BiLogoInstagramAlt /></a>
        <a href="#"><FaYoutube /></a>
    </div>
  )
}

export default HeaderSocial