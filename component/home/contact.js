import React, { Component } from 'react';
import style from "../../styles/home.module.css"
import Link from "next/link"
import AOS from "aos"

export default class Contact extends Component {
  
  componentDidMount(){
    AOS.init({duration:2000});
  }
  render() {
    return (
        <div className={style.ContactComp} data-aos="fade-up">
            <p className={style.title}>Hey! Ik <span>ben</span> Marthe </p>
            <p className={style.sousTitle}>186.281 users, 184.853 recipes, 1.432.915 photos</p>
            <Link href=""><p className={style.gofor}>Contact</p></Link>
        </div>
    );
Recepten
  }
}