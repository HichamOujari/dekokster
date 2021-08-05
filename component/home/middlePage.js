import React, { Component } from 'react';
import style from "../../styles/home.module.css"
import Link from "next/link"
import AOS from "aos"
import AvTimerIcon from '@material-ui/icons/AvTimer';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ShareIcon from '@material-ui/icons/Share';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';

export default class MiddlePage extends Component {
  
  componentDidMount(){
    AOS.init({duration:2000});
  }
  render() {
    return (
        <div className={style.middlePage} >
            <div className={style.first}>
                <div className={style.header}>
                    <p className={style.title}>Laatste recept</p>
                    <div className={style.decor}></div>
                </div>
                <img alt="" src={this.props.data[0].image} />
                <div className={style.content}>
                    <div className={style.header}>
                        <div className={style.time}>
                            <AvTimerIcon className={style.icon}/>
                            <p className={style.title}>{this.props.data[0].time+" MINUTES"}</p>
                        </div>
                        <div className={style.like}>
                            <ThumbUpAltIcon className={style.icon}/>
                            <p className={style.title}>{this.props.data[0].like}</p>
                        </div>
                    </div>
                    <p className={style.title}>{this.props.data[0].title}</p>
                    <p className={style.text}>{this.props.data[0].text}</p>
                    <div className={style.profile}>
                        <img alt="" src={this.props.data[0].user.avatar} />
                        <div className={style.right}>
                            <div className={style.left}>
                                <p className={style.username}>{this.props.data[0].user.username}</p>
                                <p className={style.date}>{this.props.data[0].user.date}</p>
                            </div>
                            <div className={style.socialMedia}>
                                <div className={style.containerIcon}>
                                    <ShareIcon className={style.icon} />
                                </div>
                                <div className={style.containerIcon}>
                                    <BookmarkBorderIcon className={style.icon} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.second}>
                {
                    this.props.data.map((item,index)=>{
                        return (<div key={index} className={style.item}>
                            <img alt="" src={item.image} className={style.image} />
                            <div className={style.content}>
                                <div className={style.header}>
                                    <LocalOfferIcon className={style.icon} />
                                    <p className={style.title}>DAILY RECIPES</p>
                                </div>
                                <p className={style.text}>{item.title}</p>
                            </div>
                        </div>)
                    })
                }
            </div>
            <div className={style.third}>
                <div className={style.header}>
                    <p className={style.title}>Mealplanner</p>
                    <div className={style.decor}></div>
                </div>
                <img alt="" src={"/home/6.jpg"} />
            </div>
        </div>
    );
  }
}
