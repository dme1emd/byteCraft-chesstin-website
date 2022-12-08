import React from 'react'
import chessBoard from '../../assets/chessboard.png'
export const About = () => {
  return (
    <div className='about'>
        <div className="about-upper">
            <h1>about <br/> the <span>event</span></h1>
            <p>Chesstin is a chess competition on its second-year edition organized by ByteCraft and Sec. We welcome everyone to participate and challenge themselves. <br/> The event will consist of two phases, the first phase Thursday the 15th in Algiers and on Friday the 16th in Amizour, Bejaia. And the second phase (finals) will be held in Estin on the 17th</p>
        </div>
        <img src={chessBoard}></img>
    </div>
  )
}
