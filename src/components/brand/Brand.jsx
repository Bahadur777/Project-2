import React from 'react'
import './brand.css';
import Google from '../assets/google.png'
import Slack from '../assets/slack.png'
import Shopify from '../assets/shopify.png'
import Dropbox from '../assets/dropbox.png'
import Bitmap from '../assets/Bitmap.png'

const Brand = () => {
  return (
    <div className='brand'>
    <div className="brand-container">
    <div className="brand-img">
      <img src={Google} alt="" />
    </div>
    <div className="brand-img">
      <img src={Slack} alt="" />
    </div>
    <div className="brand-img">
      <img src={Shopify} alt="" />
    </div>
    <div className="brand-img">
      <img src={Dropbox} alt="" />
    </div>
    <div className="brand-img">
      <img src={Bitmap} alt="" />
    </div>

    </div>
  </div>
  )
}

export default Brand