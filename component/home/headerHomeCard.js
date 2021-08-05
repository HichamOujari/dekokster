import React, { Component } from 'react';
import style from "../../styles/home.module.css"
import Link from "next/link"
import AOS from "aos"
import AvTimerIcon from '@material-ui/icons/AvTimer';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

export default class HeaderHomeCard extends Component {
  
  componentDidMount(){
    AOS.init({duration:2000});
  }
  render() {
    return (
      <div className={style.headerHomeCard} data-aos="fade-down">
          <img alt="" className={style.image} src={this.props.data.image} />
          <div className={style.content}>
            <div className={style.header}>
                <div className={style.time}>
                    <AvTimerIcon className={style.icon}/>
                    <p className={style.title}>{this.props.data.time+" MINUTES"}</p>
                </div>
                <div className={style.like}>
                    <ThumbUpAltIcon className={style.icon}/>
                    <p className={style.title}>{this.props.data.like}</p>
                </div>
            </div>
            <p className={style.title}>{this.props.data.title}</p>
            <p className={style.text}>{this.props.data.text}</p>
            <div className={style.profile}>
                <img alt="" src={this.props.data.user.avatar} />
                <div className={style.right}>
                    <p className={style.username}>{this.props.data.user.username}</p>
                    <p className={style.date}>{this.props.data.user.date}</p>
                </div>
            </div>
          </div>
      </div>
    );
  }
}
