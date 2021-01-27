import React from 'react'
import api from '../assets/icons/api.svg'
import { Skillcard } from './Skillcard'
const skills = [
    {
        icon: api,
        title: "Nonumy sit ipsum invidunt est.",
        about: "Disporting of save was of his to scarce eremites mirth."
    },
    {
        icon: api,
        title: "Nonumy sit ipsum invidunt est.",
        about: "Disporting of save was of his to scarce eremites mirth."
    },
    {
        icon: api,
        title: "Nonumy sit ipsum invidunt est.",
        about: "Disporting of save was of his to scarce eremites mirth."
    },
    {
        icon: api,
        title: "Nonumy sit ipsum invidunt est.",
        about: "Disporting of save was of his to scarce eremites mirth."
    },
    {
        icon: api,
        title: "Nonumy sit ipsum invidunt est.",
        about: "Disporting of save was of his to scarce eremites mirth."
    },
    {
        icon: api,
        title: "Nonumy sit ipsum invidunt est.",
        about: "Disporting of save was of his to scarce eremites mirth."
    } 
]
export const About = () => {
    return (
        <div className="about">
            <h6 className="about__intro">
                Et rebum aliquyam ut amet consetetur consetetur et tempor accusam.
        </h6>
            <div className="container about__container">
                <h6 className='about__heading'>
                    What I Offer
            </h6>
                <div className='row'>
                    {
                        skills.map(skill =>
                           <Skillcard skill={skill}/> 
                        )
                    }
                </div>
            </div>
        </div>
    )
}
