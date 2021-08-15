import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'
import {PATH} from "./Routes";

function Header() {
    return (
        <div className={styles.header}>
          <ul className={styles.menu}>
            <li className={styles.menuItem}>
              <NavLink to={PATH.PRE_JUNIOR} className={styles.link} activeClassName={styles.active}>
                PreJunior
              </NavLink>
            </li>
            <li className={styles.menuItem}>
              <NavLink to={PATH.JUNIOR} className={styles.link} activeClassName={styles.active}>
                Junior {/*Junior 7-11*/}
              </NavLink>

            </li>
            <li className={styles.menuItem}>
              <NavLink to={PATH.JUNIOR_PLUS} className={styles.link} activeClassName={styles.active}>
                Junior+
              </NavLink>
            </li>
          </ul>

        </div>
    )
}

export default Header
