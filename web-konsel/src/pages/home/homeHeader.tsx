import React from 'react'


function homeHeader() {
  return (
    <div className='bgx bg-header'>
      <img className='imgBupati_label1' src="/images/label1.png" alt="" />
      <div className='header-container'>
        <div className='headerLeft'>
          <div className='bupatiContainer'>
            <img className='imgBupati' src="/images/bupati.png" alt="" />
            <img className='imgBupati_tag' src="/images/bupati_tag.png" alt="" />
          </div>
        </div>
        <div className='headerRight'>
          <img className='imgResmi' src="/images/resmi.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default homeHeader