import React, { Component } from 'react';
import style from "../styles/nav_footer.module.css"
import Link from "next/link"
import AOS from "aos"
import MenuIcon from '@material-ui/icons/Menu';

export default class NavBar extends Component {
  
  componentDidMount(){
    AOS.init({duration:2000});
  }
  render() {
    return (
      <div className={style.navbar}>
        <input id="menustate" className={style.menustateCheckbox} hidden type="checkbox" />
        <div className={style.entete}></div>
        <nav data-aos="fade-down" className={style.menu}>
          <label className={style.menuIcon} htmlFor="menustate"><MenuIcon  className={style.icon} /></label>
          
          <ul>
              <li><Link href="/">Recepten</Link></li>
              <li><Link href={"/"}>Lezen</Link></li>
          </ul>
          <div className={style.logo}></div>
          <ul>
              <li><Link href={"/"}>Over mij</Link></li>
              <li><Link href={"/"}>Contact</Link></li>
          </ul>
        </nav>
        <ul className={style.mobile_nav}>
            <li><Link href="/">Recepten</Link></li>
            <li><Link href={"/"}>Lezen</Link></li>
            <li><Link href={"/"}>Over mij</Link></li>
            <li><Link href={"/"}>Contact</Link></li>
        </ul>
      </div>
    );
  }
}
