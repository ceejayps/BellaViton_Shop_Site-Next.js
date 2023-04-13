import React from 'react'
import BottomHeroNavButtons from './bottomHeroNavButtons'
import BottomeHeroNavSocial from './bottomeHeroNavSocial'

const BottomHeroNav = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
        <BottomHeroNavButtons/>
        <BottomeHeroNavSocial/>
               

               
            </div>
  )
}

export default  BottomHeroNav