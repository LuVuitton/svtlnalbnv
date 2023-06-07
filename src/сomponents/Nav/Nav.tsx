import s from './Nav.module.scss'
import {NavLink} from "react-router-dom";
import React from "react";
import {useSelector} from "react-redux";
import {RootStateType} from "../../redux/store";


export const Nav = () => {

    const standardPages = useSelector((state:RootStateType) => state.pages.pages)

//тестим просто работает или не
    const linksToStandardPages = standardPages.map((e,i)=> <NavLink key={i} to={e.pageURL}><button className={s.navBtn}>{e.pageID}</button></NavLink>)

    const links = ['main','settings']

    const mappedLinks = links.map((e,i)=>{
        return <NavLink key={i} to={e==='main'?'/':`/${e}`}><button className={s.navBtn}>{e}</button></NavLink>
    })

    return (
        <div className={s.mainWrapper}>

            {mappedLinks}

            {linksToStandardPages}

        </div>
    )
}

