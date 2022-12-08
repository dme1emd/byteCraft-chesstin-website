import React from 'react'
import logo from '../../assets/logo.svg'
import logoRed from '../../assets/logoRed.svg'
import closeMenu from '../../assets/close-menu.png'
import arrow from '../../assets/arrow.png'
export const Nav = () => {
  return (
    <section >
    <nav>
        <div className='upper'>
            <img src={logo}></img>
            <img src={closeMenu}></img>
            <img src={logoRed}></img>
        </div>
        <ul>
            {
            ['Home' , 'Chesstin' , 'About' , 'Speakers' , 'Sponsors' , 'Register'].map((e,i)=>
                {
                    return (
                    <li className={`${e=='Home' ? "selected":""}`}>
                        <a>{e}</a>
                        <img src={arrow}/>
                    </li>)
                })
            }
        </ul>
    </nav>
    </section>
  )
}
