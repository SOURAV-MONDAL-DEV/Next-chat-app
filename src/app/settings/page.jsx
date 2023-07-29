"use client"
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import style from './page.module.css'
import { FaPen } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';

import profile from './img/profile.jpg'
import PersonalInfo from '../../../Components/Settings/PersonalInfo/PersonalInfo';
import Accordion from '../../../Components/Settings/Accordion/Accordion';

function settings() {

  const [newStatus, setNewStatus] = useState("Available")
  const [isStOpen, setIsStOpen] = useState(false)
  const divRef = useRef(null);
  const handleStatusClick = (st) => {
    setNewStatus(st);
    setIsStOpen(false)
  }
  useEffect(() => {
    const handleOutsideClick = (event) => {
        if (divRef.current && !divRef.current.contains(event.target)) {
            setIsStOpen(false)
          }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

    
  return (
    <div>
        <div className={style.container}>
            <h3 className={style.heading}>Settings</h3>
            <div className={style.banner}>
                <div className={style.picwraper}>
                    <Image className={style.profileImg} src={profile} height={95} width={95} alt='profile'/>
                    <div className={style.penbg}>
                        <FaPen className={style.pen}></FaPen>
                    </div>
                </div>
                <div className={style.name_info}>
                    <h3 className={style.name}>Patricia Smith</h3>
                    <div  ref={divRef} className={style.status_wraper}>
                        <p onClick={()=>setIsStOpen(!isStOpen)} onBlur={()=>setIsStOpen(false)} >{newStatus} <MdKeyboardArrowDown></MdKeyboardArrowDown></p>
                        {
                            isStOpen && <div  className={style.statuses}>
                                            <p onClick={()=>handleStatusClick("Available")}  className={style.status}>Available</p>
                                            <p onClick={()=>handleStatusClick("Busy")}  className={style.status}>Busy</p>
                                        </div>
                        }
                    </div>
                </div>
            </div>
            <div>
            </div>
            <PersonalInfo/>
            <PersonalInfo/>
            <PersonalInfo/>
        </div>
    </div>
  )
}

export default settings