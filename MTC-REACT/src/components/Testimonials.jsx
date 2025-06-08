import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    text: "Since my first contact I have received a very high level of customer service and advice with my kitchen plans. Ben responded very quickly to all of my emails and delivery of the kitchen was as planned.",
    author: "— Sarah & Michael Thompson"
  },
  {
    text: "Absolutely fantastic service from start to finish. The craftsmanship is outstanding and the attention to detail is second to none. Our new kitchen exceeded all expectations and has become the heart of our home.",
    author: "— James & Emma Wilson"
  },
  {
    text: "MTC Home Kitchens delivered exactly what we dreamed of. The team was professional, punctual, and incredibly skilled. The handmade quality is evident in every corner of our beautiful new kitchen.",
    author: "— David & Rachel Martinez"
  },
  {
    text: "We couldn't be happier with our investment. The design process was collaborative and the installation was seamless. Three years later, our kitchen still looks brand new and functions perfectly.",
    author: "— Robert & Lisa Chen"
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goTo = (index) => {
    setActive(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prev = () => {
    setActive((active - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const next = () => {
    setActive((active + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className='testimonial-section-new' aria-labelledby="testimonial-heading">
      <div className='testimonial-container-new'>
        <p className='testimonial-overline-new'>What Our Customers Say</p>
        <h2 id="testimonial-heading" className='testimonial-heading-new'>Over 35 years experience designing handmade kitchens</h2>
        
        <div className='testimonial-carousel-new'>
          <div className='testimonial-content-new'>
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`testimonial-item-new ${index === active ? 'active' : ''}`}
              >
                <blockquote className='testimonial-text-new'>
                  "{testimonial.text}"
                </blockquote>
                <cite className='testimonial-author-new'>
                  {testimonial.author}
                </cite>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button 
            className='testimonial-nav-new testimonial-prev-new' 
            onClick={prev}
            aria-label='Previous testimonial'
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <button 
            className='testimonial-nav-new testimonial-next-new' 
            onClick={next}
            aria-label='Next testimonial'
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Dots Navigation */}
        <div className='testimonial-dots-new'>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`testimonial-dot-new ${index === active ? 'active' : ''}`}
              onClick={() => goTo(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <a href='/faq' className='faq-button-new btn-gold-new'>
          Frequently Asked Questions
        </a>
      </div>
    </section>
  );
};

export default Testimonials;
