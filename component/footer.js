import React, { Component } from 'react';
import style from "../styles/nav_footer.module.css"
import Link from "next/link"
import AOS from "aos"
import PinterestIcon from '@material-ui/icons/Pinterest';
import InstagramIcon from '@material-ui/icons/Instagram';

export default class Footer extends Component {
  
  componentDidMount(){
    AOS.init({duration:2000});
  }
  render() {
    return (
      <div className={style.footer} >
        <p className={style.left}>© Copyright De Kokster</p>
        <div className={style.right}>
          <InstagramIcon />
          <PinterestIcon />
        </div>
      </div>
    );
  }
}
