import React from 'react'
import react from '../assets/icons/react.svg'
const languages = [
    {
        icon: 'react',
        name: 'python',
        level: ''
    },
    {
        icon: 'react',
        name: 'python',
        level: ''
    },
    {
        icon: 'react',
        name: 'python',
        level: ''
    }
]

const tools = [
    {
        icon: 'react',
        name: 'Github',
        level: ''
    },
    {
        icon: 'react',
        name: 'Github',
        level: ''
    },
    {
        icon: 'react',
        name: 'Github',
        level: ''
    }
]
export const Resume = () => {
    return (
        <div className="container resume">
            <div className="row">
                <div className="col-lg-6 resume-card">
                    <div className="resume-card__body">
                        Education
                    </div>
                    <h5 className='resume-card__title'>
                        Computer Science and Engineering (BE)
                    </h5>
                    <p className="resume-card__name">
                        Nanasaheb Mahadik College of Engineering, Peth
                    </p>
                    <p className='resume-card__details'>
                        Est voluptua et sadipscing invidunt sadipscing kasd sed sadipscing, duo.
                    </p>
                </div>
                <div className="col-lg-6 resume-card">
                    <div className="resume-card__body">
                        Experience
                    </div>
                    <h5 className='resume-card__title'>
                        Computer Science and Engineering (BE)
                    </h5>
                    <p className="resume-card__name">
                        Nanasaheb Mahadik College of Engineering, Peth
                    </p>
                    <p className='resume-card__details'>
                        Est voluptua et sadipscing invidunt sadipscing kasd sed sadipscing, duo.
                    </p>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-6 resume-languages'>
                    <h5 className='resume-langauge__heading'>
                        Language and Framework
                </h5>
                    <div className='resume-language__body'>
                        {
                            languages.map(language => {
                                <Bar language={language} />
                            })
                        }
                    </div>
                </div>
                <div className='col-lg-6 resume-languages'>
                    <h5 className='resume-langauge__heading'>
                        Tools and Softwares
                </h5>
                    <div className='resume-language__body'>
                        {
                            tools.map(tool=>{
                                <Bar tool={tool}/>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
