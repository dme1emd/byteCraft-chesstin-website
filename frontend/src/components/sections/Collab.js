import React from 'react'
import collective from '../../assets/collective.png'
import bnadem from '../../assets/bnadem.png'
import col1 from '../../assets/col1.png'
import col2 from '../../assets/col2.png'
export const Collab = () => {
  return (
    <div className='collab'>
        <h1>the <br/><span>collaboration</span></h1>
        <div className='upper'>
            <p>
            ByteCraft is scientific club that is hosted by (ESTIN Amizour) and that was officially opened to the world on October 25th 2021, its aim is to make events, conferences and workshops unrelated and especially related to tech
            </p>
            <img src={collective}></img>
            <img src={col1}></img>
        </div>
        <div className='lower'>
          <img src={col2}></img>
            <img src={bnadem}></img>
            <p>Sports & Entertainment Club is a sports club created in november 2021 by passionate students of ESI ALGEIRS. In its first year, SEC organized events for a better students lifestyle starting with Chess Break:a competition for chess lovers. And many others.</p>
        </div>
    </div>
  )
}
