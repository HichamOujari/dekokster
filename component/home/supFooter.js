import React, { Component } from 'react';
import style from "../../styles/home.module.css"
import Link from "next/link"
import AOS from "aos"

export default class SupFooter extends Component {
  
  componentDidMount(){
    AOS.init({duration:2000});
  }
  render() {
    return (
        <div className={style.SupFooterComp} data-aos="fade-up">
            <p className={style.title}>Psst, ik heb nog wat voor jou </p>
            <p className={style.text}>Euh, welke groenten zijn er nu weer dit seizoen? Deze vraag moet je je niet meer stellen met mijn super handige fruit-en seizoensgroenten kalender! Meer nood aan planning? Geen tijd om meerdere keren per week naar de winkel te gaan? Download dan hier mijn mealplanner!</p>
            <div className={style.books}>
                <img alt="" src={"/home/book_1.png"} />
                <img alt="" src={"/home/book_2.png"} />
                <img alt="" src={"/home/book_3.png"} />
            </div>
        </div>
    );
Recepten
  }
}