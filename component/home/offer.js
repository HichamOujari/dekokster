import React, { Component } from 'react';
import style from "../../styles/home.module.css"
import Link from "next/link"
import AOS from "aos"

export default class Offer extends Component {
  
  componentDidMount(){
    AOS.init({duration:2000});
  }
  render() {
    return (
        <div className={style.OfferComp} data-aos="fade-up">
            <p className={style.title}>We Offer You <span>Partnership</span> </p>
            <p className={style.sousTitle}>We love to partner with brands and products that we believe in. If you feel that your company shares values and would benefit our readers, we would love to talk about working together.</p>
            <Link href=""><p className={style.gofor}>LEARN MORE</p></Link>
        </div>
    );
Recepten
  }
}