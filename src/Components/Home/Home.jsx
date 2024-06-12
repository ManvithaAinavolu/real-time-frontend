import React, { useState } from 'react'
import './Home.css';
import first from'../../Assets/first.png';
import second from'../../Assets/second.webp';
import third from'../../Assets/third.webp';
import four from'../../Assets/four.webp';
import five from'../../Assets/five.webp';
import six from'../../Assets/six.webp';
import InternData from '../../Data/Internships';
import Footer from '../../Components/Footer/Footer';
function Home() {
    const [currentSlide,setCurrentslide]=useState(0);
    const [selectedCategory,setSelectedCategory]=useState("");
    const handleSlide=(direction)=>{
        const container=document.getElementById("container");
        const step=100;
        if(direction=='left')
        {
            setCurrentslide((prevSlide)=>(prevSlide>0 ? prevSlide-1 :0))
        }
        else{
            setCurrentslide((prevSlide)=>(prevSlide<3 ? prevSlide+1:3))
        }
        sideScroll(container, direction, 25, 100, step);    }
  return (
    <div>
      <h1>Make Your dream career a Reality</h1>
      <p>Trending on Find-Intern Area 🔥</p>
      <div className="imgs" id='container'>
        <div className="slide" id='content'>
            <img className='slide_Img' src={first} alt="" />
            <img className='slide_Img' src={second} alt="" />
            <img className='slide_Img' src={third} alt="" />
            <img className='slide_Img' src={four} alt="" />
            <img className='slide_Img' src={five} alt="" />
            <img className='slide_Img' src={six} alt="" />


        </div>
      </div>
      <div className="flex-buttons">
        <button className="prev" onClick={()=>handleSlide('left')}><i id="sideBack"className='bi bi-chevron-left'></i></button>
        <button className="next" onClick={()=>handleSlide('right')}><i id='slide' className='bi bi-chevron-right'></i></button>

      </div>
      <div className="infoys">
        <div className="info-intern">
          <div className="mt-16">
            <h1 className='latest'>Latest Internships on Find-intern Area</h1>
          </div>
          <div className="categories">
            <p>POPULAR CATEGORIES</p>
            <span className='category'>Big Brands</span>
            <span className='category'>Engineering</span>
            <span className='category'>Work from Home</span>
            <span className='category'>MBA</span>
            <span className='category'>Media</span>
            <span className='category'>Design</span>
            <span className='category'>Part-Time</span>

          </div>
          <div className="internships-container" id="container2">
    {InternData.map((data,index) => (
        <div className="internship-info" key={index}>
            <div className="int-1">
                <p className='mb-4' id='boxer'>
                    <i className='bi bi-arrow-up-right text-blue-500'></i> 
                    Actively Hiring
                </p>
                <p>{data.title}</p>
                <hr className='mt-5'/>
                <div className="details">
                <p className='text-slate-400 text-sm'><i class="bi bi-building"></i>{data.company}</p>

                    <p className='mt-3'><i className='bi bi-geo-alt text-slate-400'></i>{data.location}</p>
                    <p className='mt-1'><i className='bi bi-cash-stack text-slate-400'></i>{data.salary}</p>
                    <p className='mt-1'><i class="bi bi-calendar-range"></i>{data.duration}</p>
                    <p>More</p>
                    <a href="#" className="view-details">View Details<i className='bi bi-chevron-right'></i></a>
                </div>
            </div>
        </div>
    ))}
</div>

        </div>

      </div>
      <hr/>
      <div className="analytics">
        <div className="text-block">
        <span className='font'>
            300K+
          </span>
          <p>Companies Hiring</p>
        </div>
        <div className="text-block">
          <span className='font'>
            10K+
          </span>
          <p>New Companies Every Day</p>
        </div>
        <div className="text-block">
          <span className='font'>
            21Mn+
          </span>
          <p>active Students</p>
        </div>
        <div className="text-block">
          <span className='font'>
            600K+
          </span>
          <p>Learners</p>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home


function sideScroll(element,direction,speed,distance,step){
    let scrollAmount=0;
    const slideTimer=setInterval(function(){
        if(direction=='left'){
            element.scrollLeft-=step
        }
        else{
            element.scrollLeft+=step
        }
        scrollAmount+=step;
        if(scrollAmount>=distance){
            window.clearInterval(slideTimer)
        }
    },speed)
}