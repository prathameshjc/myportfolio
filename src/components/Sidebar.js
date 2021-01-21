import React from 'react'
import facebook from '../assets/icons/facebook.svg'
import instagram from '../assets/icons/instagram.svg'
import github from '../assets/icons/github.svg'
import pin from '../assets/icons/pin.svg'
import tie from '../assets/icons/tie.svg'
import mightycoder from '../assets/mightycoder.svg'
import resume from '../assets/Prathamesh-Jadhav.pdf'
const Sidebar = () => {
    return (
        <div className="sidebar">
            <img src={mightycoder} alt="avatar" className="sidebar__avatar"/>
            <div className="sidebar__name">Prathamesh <span>Jadhav</span></div>
            <div className="sidebar__item sidebar__title">Fullstack Developer, React Developer</div>
            <a href={resume} download="Resume-Prathamesh_Jadhav.pdf">
                <div className="sidebar__items sidebar__resume">
                    <img src={tie} alt="resume" className="sidebar__icon "/>Download Resume
                </div>
            </a>
            <figure className="sidebar__social-icons my-2">
                <a href={'#'}>
                    <img src={facebook} alt="facebook" className="sidebar__icon mr-3"/>
                </a>
                <a href='#'>
                    <img src={instagram} alt="instagram" className="sidebar__icon"/>
                </a>
            </figure>
            <div className="sidebar__contact ">
                <div className="sidebar__github">
                    <a href="#">
                        <img src={github} alt="github" className="sidebar__icon mr-3"/>github
                    </a>
                </div>
                <div className="sidebar__location">
                    <img src={pin} alt="location" className="sidebar__icon mr-3"/>Sangli, India</div>
                <div className='sidebar__item'>prathameshjc@gmail.com</div>
                <div className="sidebar__item">8806239843</div>
            </div>
            <div className='sidebar__item sidebar__email'>
                email me
            </div>

        </div>
    )
}

export default Sidebar;