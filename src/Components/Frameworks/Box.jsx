import React from 'react'
import './frameworks.css'
import { FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa'
import {SiJavascript} from 'react-icons/si'

const Box = () => {
    return (
        <>
            <div className='box-grid'>
                <div className='box-main'>
                    <h5 className='frame-title'>HTML</h5>
                    <FaHtml5 className='frame-icon' />
                    <h5 className='skills'>Skills</h5>
                    <div className='pointer'>
                        <div className='point active'></div>
                        <div className='point active'></div>
                        <div className='point active'></div>
                        <div className='point'></div>
                        <div className='point'></div>
                    </div>
                </div>
                <div className='box-main'>
                    <h5 className='frame-title'>CSS</h5>
                    <FaCss3Alt className='frame-icon' />
                    <h5 className='skills'>Skills</h5>
                    <div className='pointer'>
                        <div className='point active'></div>
                        <div className='point active'></div>
                        <div className='point active'></div>
                        <div className='point'></div>
                        <div className='point'></div>
                    </div>
                </div>
                <div className='box-main'>
                    <h5 className='frame-title'>JavaScript</h5>
                    <SiJavascript className='frame-icon' />
                    <h5 className='skills'>Skills</h5>
                    <div className='pointer'>
                        <div className='point active'></div>
                        <div className='point active'></div>
                        <div className='point'></div>
                        <div className='point'></div>
                        <div className='point'></div>
                    </div>
                </div>
                <div className='box-main'>
                    <h5 className='frame-title'>React</h5>
                    <FaReact className='frame-icon' />
                    <h5 className='skills'>Skills</h5>
                    <div className='pointer'>
                        <div className='point active'></div>
                        <div className='point active'></div>
                        <div className='point'></div>
                        <div className='point'></div>
                        <div className='point'></div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Box