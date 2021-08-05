import React, { Component } from 'react';
import style from "../../styles/home.module.css"
import Link from "next/link"
import AOS from "aos"
import AvTimerIcon from '@material-ui/icons/AvTimer';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import FavoriteIcon from '@material-ui/icons/Favorite';

export default class Recepten extends Component {
  
  componentDidMount(){
    AOS.init({duration:2000});
  }
  render() {
    return (
        <div className={style.receptenComp} data-aos="fade-up">
            <div className={style.header}>
              <div className={style.decor}></div>
              <p className={style.title}>Recepten</p>
              <div className={style.decor}></div>
          </div>
          <div className={style.content}>
              {
                  this.props.data.map((item,index)=>{
                      return (<div className={style.item}>
                          <img alt="" src={item.image} />
                          <div className={style.detail}>
                              <div className={style.header}>
                                <div className={style.time}>
                                    <AvTimerIcon className={style.icon}/>
                                    <p className={style.title}>{item.time+" MINUTES"}</p>
                                </div>
                                <div className={style.like}>
                                    <ThumbUpAltIcon className={style.icon}/>
                                    <p className={style.title}>{item.like}</p>
                                </div>
                              </div>
                              <p className={style.title}>{item.title}</p>
                              <p className={style.text}>{item.text}</p>
                              <div className={style.profile}>
                                    <img alt="" src={item.user.avatar} />
                                    <div className={style.right}>
                                        <div className={style.left}>
                                            <p className={style.username}>{item.user.username}</p>
                                            <p className={style.date}>{item.user.date}</p>
                                        </div>
                                        <div className={style.socialMedia}>
                                            <FavoriteIcon className={item.liked==true?style.iconLiked:style.icon}/>
                                        </div>
                                    </div>
                               </div>
                               <Link href="">
                                   <div className={style.gofor}>
                                       <p className={style.title}>READ MORE</p>
                                       <div className={style.iconContainer}>
                                           <ArrowForwardIcon className={style.icon} />
                                       </div>
                                   </div>
                               </Link>
                          </div>
                      </div>)
                  })
              }
          </div>
        </div>
    );
Recepten
  }
}