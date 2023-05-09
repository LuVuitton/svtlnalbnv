import s from './Nav.module.scss'
import {NavLink} from "react-router-dom";
import React from "react";


export const Nav = () => {

    const links = ['main','about-me','services','showcase','blog','contacts','settings']
    const mappedLinks = links.map((e,i)=>{
        return <NavLink key={i} to={e==='main'?'/':`/${e}`}><button className={s.navBtn}>{e}</button></NavLink>
    })

    return (
        <div className={s.mainWrapper}>

            {mappedLinks}

        </div>
    )
}

