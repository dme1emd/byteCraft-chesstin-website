import React from 'react'
import fakeMag from '../../assets/fakeMag.png'
export const Speakers = () => {
    const arr = [
        {
            img:fakeMag,
            h1:'magnus' , 
            p : 'This is the first speaker paragraph that is going to be a briefing about what will the speaker be talking about in his conference or so called workshop, this section is to be worked on when both the content and the needed information are ready thank you merci bye.', 
            a : '#'
        },
                {
                    img:fakeMag,
            h1:'magnus' , 
            p : 'loremzkdjsvkhbjckll dokfjsihdfj rkoefzjighdjfk jfkdsl' , 
            a : '#'
        },
        {
            img:fakeMag,
            h1:'magnus' , 
            p : 'loremzkdjsvkhbjckll dokfjsihdfj rkoefzjighdjfk jfkdsl' , 
            a : '#'
        }
    ]
  return (
    <div className='speakers'>
        <h1>our <span>speakers</span></h1>
        <div className='speakers-container'>
            {
                arr.map((e)=>{
                    return(<div className='speaker'>
                        <img src={`${fakeMag}`}></img>
                        <h2>{e.h1}</h2>
                        <p>{e.p}</p>
                        <a href={`${e.a}`}>chess learning</a>
                    </div>)
                })
            }
        </div>
    </div>
  )
}
