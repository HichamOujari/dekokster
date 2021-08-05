import React, { Component } from 'react';
import style from "../../styles/home.module.css"
import Link from "next/link"
import AOS from "aos"
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import HeaderHomeCard from "./headerHomeCard"
export default class HomeHeader extends Component {
  
  componentDidMount(){
    AOS.init({duration:2000});
  }
  render() {
    return (
      <div className={style.headerHome} >
          <ArrowForwardIcon className={style.leftArrow} />
          <div className={style.content}  onScroll={(e)=>{
              console.log(e);
          }}>
              {this.props.data.map((item,index)=>{
                  return (<HeaderHomeCard key={index} data={item} />)
              })}
          </div>
          <ArrowForwardIcon className={style.rightArrow}/>
      </div>
    );
  }
}
