import Head from 'next/head'
import NavBar from "../component/navbar"
import Footer from "../component/footer"
import HomeHeader from "../component/home/homeHeader"
import MiddlePage from "../component/home/middlePage"
import Gallery from "../component/home/gallery"
import Contact from "../component/home/contact"
import Recepten from "../component/home/recepten"
import Offer from "../component/home/offer"
import SupFooter from "../component/home/supFooter"

export default function Home() {

  const data = [
    {
      image:"/home/1.jpg",
      time:30,
      like:"gezond",
      liked:true,
      title:"Egg salad sandwich with avocado and watercress",
      text:"Lorem ipsum dolor sit amet, conse tetui isicing elit, sed do eiu smod tempor inci unt ut labore et dol ore magna aliqu enim ad minim veniamquis",
      user:{
        avatar:"/icons/user.png",
        username:"woutbuelens",
        date:"7 mei,2020"
      }
    },{
      image:"/home/2.jpg",
      time:30,
      liked:false,
      like:"gezond",
      title:"Egg salad sandwich with avocado and watercress",
      text:"Lorem ipsum dolor sit amet, conse tetui isicing elit, sed do eiu smod tempor inci unt ut labore et dol ore magna aliqu enim ad minim veniamquis",
      user:{
        avatar:"/icons/user.png",
        username:"woutbuelens",
        date:"7 mei,2020"
      }
    },{
      image:"/home/3.jpg",
      time:30,
      liked:false,
      like:"gezond",
      title:"Egg salad sandwich with avocado and watercress",
      text:"Lorem ipsum dolor sit amet, conse tetui isicing elit, sed do eiu smod tempor inci unt ut labore et dol ore magna aliqu enim ad minim veniamquis",
      user:{
        avatar:"/icons/user.png",
        username:"woutbuelens",
        date:"7 mei,2020"
      }
    },{
      image:"/home/4.jpg",
      time:30,
      liked:false,
      like:"gezond",
      title:"Egg salad sandwich with avocado and watercress",
      text:"Lorem ipsum dolor sit amet, conse tetui isicing elit, sed do eiu smod tempor inci unt ut labore et dol ore magna aliqu enim ad minim veniamquis",
      user:{
        avatar:"/icons/user.png",
        username:"woutbuelens",
        date:"7 mei,2020"
      }
    },{
      image:"/home/5.jpg",
      time:30,
      liked:false,
      like:"gezond",
      title:"Egg salad sandwich with avocado and watercress",
      text:"Lorem ipsum dolor sit amet, conse tetui isicing elit, sed do eiu smod tempor inci unt ut labore et dol ore magna aliqu enim ad minim veniamquis",
      user:{
        avatar:"/icons/user.png",
        username:"woutbuelens",
        date:"7 mei,2020"
      }
    },
  ]
  
  return (
    <div> 
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="icon" href="/logo.png"/>
        <title>Home - De Kokster</title>
      </Head>
      <NavBar />
      <HomeHeader data={data} />
      <MiddlePage data={data} />
      <Gallery data={data}/>
      <Contact />
      <Recepten data={data}/>
      <Offer />
      <SupFooter />
      <Footer/>
    </div>
  )
}
