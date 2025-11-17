import React, { useEffect } from "react";
import "./FloatingElements.css";
import petGif from "../img/Logo.gif";

export default function FloatingElements(){
  // optional: slight parallax on scroll for clouds
  useEffect(()=>{
    const clouds = document.querySelectorAll('.cloud');
    const onScroll = ()=> {
      const y = window.scrollY;
      clouds.forEach((c,i)=>{
        const speed = (i % 2 === 0) ? 0.02 : 0.04;
        c.style.transform = `translateX(${y * speed}px)`;
      });
    };
    window.addEventListener("scroll", onScroll);
    return ()=> window.removeEventListener("scroll", onScroll);
  },[]);

  return (
    <>
      <div className="cloud cloud-1" />
      <div className="cloud cloud-2" />
      <div className="cloud cloud-3" />
      {/* butterfly svg */}
      <div className="butterfly" aria-hidden>
        <svg viewBox="0 0 100 100" width="60" height="60" className="butterfly-svg">
          <g fill="none" stroke="none">
            <path d="M50 50 C30 20, 10 20, 30 45 C15 60, 30 80, 50 60 C70 80, 85 60, 70 45 C90 20, 70 20, 50 50Z" fill="#ffd27a" opacity="0.95"/>
            <circle cx="50" cy="50" r="3" fill="#1f2a36"/>
          </g>
        </svg>
      </div>

      {/* fixed pet in corner */}
      <div className="pet-corner">
        <img src={petGif} alt="mascote" />
      </div>
    </>
  );
}
