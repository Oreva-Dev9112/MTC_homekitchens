import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import slider1 from "../assets/slider/slider-1.png";
import slider2 from "../assets/slider/slider-2.webp";
import slider3 from "../assets/slider/slider-3.webp";

const slides = [
  {
    img: slider1,
    overline: "Design and order your new kitchen online today",
    headline: "Bespoke & made to measure handmade kitchen design",
    btn: "Order Now",
    link: "/order"
  },
  {
    img: slider2,
    overline: "Transform your space with expert craftsmanship",
    headline: "Custom kitchen solutions tailored to your lifestyle",
    btn: "Get Started",
    link: "/plan"
  },
  {
    img: slider3,
    overline: "Explore our stunning kitchen transformations",
    headline: "Discover inspiration for your dream kitchen project",
    btn: "View Gallery",
    link: "/gallery"
  },
];

const Slider = () => {
  return (
    <section className="hero-section">
      <Swiper
        className="hero-swiper"
        modules={[Navigation, Pagination, Autoplay]}
        navigation={true}
        pagination={{ 
          clickable: true,
          dynamicBullets: false
        }}
        autoplay={{ 
          delay: 5000, 
          disableOnInteraction: false,
          pauseOnMouseEnter: true 
        }}
        loop={true}
        speed={1000}
        spaceBetween={0}
        slidesPerView={1}
        watchSlidesProgress={true}
        observer={true}
        observeParents={true}
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx} className="hero-slide">
            <div
              className="slide-background"
              style={{
                backgroundImage: `url(${slide.img})`
              }}
            >
              {/* Dark Overlay */}
              <div className="slide-overlay"></div>
              {/* Slide Content */}
              <div className="slide-content">
                <p className="slide-overline">
                  {slide.overline}
                </p>
                <h1 className="slide-headline">
                  {slide.headline}
                </h1>
                <a href={slide.link} className="slide-cta-btn">
                  {slide.btn}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
