import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

function Run() {
  useEffect(() => {
    // Load external script
    const script = document.createElement('script');
  script.src = "https://unpkg.com/swiper/swiper-bundle.min.js";
  script.async = true;

  // Define a function to initialize Swiper when the script is loaded
  const initializeSwiper = () => {
    const swiper = new Swiper(".hero", {
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  };

  // Append the script to the document body
  document.body.appendChild(script);

  // Listen for the script's 'load' event and initialize Swiper once it's loaded
  script.addEventListener('load', initializeSwiper);

  // Cleanup function to remove the script and event listener when the component unmounts
  return () => {
    document.body.removeChild(script);
    script.removeEventListener('load', initializeSwiper);
  };
}, []);

  // Initialize Swiper for the "project-slider" section
  useEffect(() => {
    const swiper = new Swiper(".project-slider", {
      slidesPerView: 2,
      spaceBetween: 30,
      pagination: {
        el: ".project-slider .swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".project-slider .swiper-button-next",
        prevEl: ".project-slider .swiper-button-prev",
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
      },
    });
  }, []);

  return (
    <div>
    </div>
  );
}

export default Run;
