import React, { Component } from 'react';
import style from "../../styles/home.module.css"
import Link from "next/link"
import AOS from "aos"
import BurstModeIcon from '@material-ui/icons/BurstMode';
import InstagramIcon from '@material-ui/icons/Instagram'

export default class Gallery extends Component {
  
  componentDidMount(){
    AOS.init({duration:2000});
  }
  render() {
    return (
      <div className={style.galleryComp} data-aos="fade-down">
          <div className={style.header}>
              <div className={style.decor}></div>
              <p className={style.title}>@de_kokster</p>
              <div className={style.decor}></div>
          </div>
          <div className={style.content}>
            {
                this.props.data.map((item,index)=>{
                    return (<Link key={index} href="">
                        <div className={style.container}>
                            <img alt="" src={item.image} />
                            <BurstModeIcon className={style.ico} />
                        </div>
                    </Link>)
                })
            }
          </div>
          <Link href="">
              <div className={style.gofor}>
                <InstagramIcon className={style.icon} />
                <p className={style.title}>Volg mij op Instagram</p>
              </div>
          </Link>
      </div>
    );
  }
}
