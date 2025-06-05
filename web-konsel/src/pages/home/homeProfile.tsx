import React from 'react'

function homeProfile() {
  return (
    <div className='bgx2 bg-profile'>
      <div className='profileTop'>
        <div className='profileLeft'>
          <img className='profileImgLeft' src="/images/label2.png" alt="" />
        </div>
        <div className='profileMid'>
          <img className='profileImgMid' src="/images/profile.png" alt="" />
        </div>
        <div className='profileRight'>
          <img className='profileImgRight' src="/images/wakil.png" alt="" />
          <div>
            <img className='imgWabup_tag' src="/images/wabup_tag.png" alt="" />
          </div>
        </div>
      </div>

      <div className='profileBottom'>
        <div className='profileBottomContainer'>

          <a href="javascript:void(0);" className='profileBottomContainOutside'>
            <img className='imgProfileIcon3' src="/images/profilbupati.png" alt="" />
          </a>
          <a href="javascript:void(0);" className='profileBottomContainOutside'>
            <img className='imgProfileIcon3' src="/images/profilwakil.png" alt="" />
          </a>
          <a href="javascript:void(0);" className='profileBottomContainOutside'>
            <img className='imgProfileIcon3' src="/images/profilsekda.png" alt="" />
          </a>
          <a href="javascript:void(0);" className='profileBottomContainOutside'>
            <img className='imgProfileIcon3' src="/images/profilvisi.png" alt="" />
          </a>
          <a href="javascript:void(0);" className='profileBottomContainOutside'>
            <img className='imgProfileIcon3' src="/images/profilmisi.png" alt="" />
          </a>
          <a href="javascript:void(0);" className='profileBottomContainOutside'>
            <img className='imgProfileIcon3' src="/images/profilsejarah.png" alt="" />
          </a>

        </div>
      </div>
    </div>
  )
}

export default homeProfile
