'use client';

import './navigation.scss';

import { useState } from 'react';
import topics from '../../api/topics';

export default function Nav() {
    let start = 0;
    start++;

    const [show, setShow] = useState(false);

    const handleMouseEvent = () =>{
        setShow(!show);
    }

    return (     
        <>
        <nav className='nav-header m0 mb5 p0'>
            <div className='nav-container'>
                <button type='button' className={`nav-hamburger ${show ? 'active' : null}`} onClick={handleMouseEvent}>
                    <span className='nav-hamburger-bar'></span>
                    <span className='nav-hamburger-bar'></span>
                    <span className='nav-hamburger-bar'></span>
                </button>
                <div className={`nav-li-wrap ${show ? 'active' : null}`}>
                <ul className='nav-ul'>
                {Object.values(topics).map(topic => {
                    return (
                        <li className='nav-li' key={start}>
                            <a href={`/${topic.id}`}>{topic.cta}</a>
                        </li>
                    )
                })} 
                </ul>
            </div>
            </div>
            
        </nav>
        </>
    );
}
