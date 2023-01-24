import React from 'react'
import { NavLink } from 'react-router-dom'

import posts from '../../assets/icon/posts.svg'
import profile from '../../assets/icon/profile.svg'

import styles from './Header.module.scss'

const setActive = ({isActive}) => isActive ? `${styles.active}` : `${styles.header__item}`;

const Header = () => {
  return (
    <header className={styles.header}>
        <NavLink to="/" className={setActive}>
            <img className={styles.icon} src={posts} alt="posts" />
        </NavLink>
        <div className={styles.add}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
        </div>
        <NavLink to="profile" className={setActive}>
            <img className={styles.icon} src={profile} alt="profile" />
        </NavLink>
    </header>
  )
}

export default Header