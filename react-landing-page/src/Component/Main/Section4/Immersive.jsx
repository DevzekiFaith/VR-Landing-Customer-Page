import React from 'react'
import './Immersive.css';
import { ImmersiveData } from './ImmersiveData'
import ImmersiveProps from './ImmersiveProps'

const Immersive = () => {
  return (
    <div className='ImmersiveFlex'>
        {ImmersiveData.map((each) => (
          <ImmersiveProps 
          key= {each.id}
          game= {each.game}
          image= {each.image}
          />

        ))}
    </div>



  )
}

export default Immersive