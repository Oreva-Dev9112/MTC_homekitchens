document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile menu functionality
    
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const body = document.body;
    
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            const isActive = mobileMenuToggle.classList.contains('active');
            
            if (isActive) {
                // Close menu
                mobileMenuToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
                body.style.overflow = '';
                body.classList.remove('menu-open');
            } else {
                // Open menu
                mobileMenuToggle.classList.add('active');
                mobileMenu.classList.add('active');
                body.style.overflow = 'hidden';
                body.classList.add('menu-open');
            }
        });
        
        // Close menu when clicking on menu links
        const mobileMenuLinks = mobileMenu.querySelectorAll('.mobile-nav-link');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
                body.style.overflow = '';
                body.classList.remove('menu-open');
            });
        });
        
        // Close menu when clicking on overlay
        const overlay = mobileMenu.querySelector('.mobile-menu-overlay');
        if (overlay) {
            overlay.addEventListener('click', function(e) {
                if (e.target === overlay) {
                    mobileMenuToggle.classList.remove('active');
                    mobileMenu.classList.remove('active');
                    body.style.overflow = '';
                    body.classList.remove('menu-open');
                }
            });
        }
        
        // Close menu with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
                mobileMenuToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
                body.style.overflow = '';
                body.classList.remove('menu-open');
            }
        });
    }
    
    // Hero slider setup
    function initHeroSlider() {
        const heroSwiper = new Swiper('.hero-swiper', {
            loop: true,
            speed: 1000,
            autoplay: {
                delay: 4500,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            on: {
                slideChange: function () {
                    this.slides.forEach(slide => slide.classList.remove('slide-active'));
                    this.slides[this.activeIndex].classList.add('slide-active');
                }
            }
        });
        
        // Pause on hover
        const container = document.querySelector('.hero-swiper');
        if (container) {
            container.addEventListener('mouseenter', () => heroSwiper.autoplay.stop());
            container.addEventListener('mouseleave', () => heroSwiper.autoplay.start());
        }
    }
    
    setTimeout(initHeroSlider, 150);
    
    // Smooth scrolling
    
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href !== '#' && href !== '') {
                e.preventDefault();
                
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    const headerOffset = 100; // Account for fixed header
                    const elementPosition = targetElement.offsetTop;
                    const offsetPosition = elementPosition - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Navbar scroll effect
    const navbar = document.querySelector('nav');
    
    function updateNavbar() {
        const scrolled = window.scrollY > 100;
        if (navbar) {
            navbar.classList.toggle('scrolled', scrolled);
        }
    }
    
    // Simple throttled scroll
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (!scrollTimeout) {
            scrollTimeout = setTimeout(() => {
                updateNavbar();
                scrollTimeout = null;
            }, 10);
        }
    });
    
    // Testimonial slider
    let currentSlide = 0;
    const testimonialCount = 4;
    let slideTimer;
    
    function setupTestimonials() {
        const slides = document.querySelectorAll('.testimonial-slide');
        const dots = document.querySelectorAll('.testimonial-dot');  
        const prevBtn = document.querySelector('.prev-arrow');
        const nextBtn = document.querySelector('.next-arrow');
        
        if (!slides.length) return;
        
        if (prevBtn) prevBtn.onclick = () => changeSlide(-1);
        if (nextBtn) nextBtn.onclick = () => changeSlide(1);
        
        dots.forEach((dot, i) => {
            dot.onclick = () => showSlide(i);
        });
        
        const section = document.querySelector('.testimonial-section');
        if (section) {
            section.onmouseenter = () => clearInterval(slideTimer);
            section.onmouseleave = () => autoSlide();
        }
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') changeSlide(-1);
            if (e.key === 'ArrowRight') changeSlide(1);
        });
        
        autoSlide();
    }
    
    function showSlide(index) {
        const slides = document.querySelectorAll('.testimonial-slide');
        const dots = document.querySelectorAll('.testimonial-dot');
        
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        
        currentSlide = index;
        
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
        
        document.querySelector('.testimonial-slides').style.transform = 
            `translateX(-${currentSlide * 100}%)`;
    }
    
    const changeSlide = (direction) => {
        let newSlide = currentSlide + direction;
        if (newSlide >= testimonialCount) newSlide = 0;
        if (newSlide < 0) newSlide = testimonialCount - 1;
        showSlide(newSlide);
    }
    
    function autoSlide() {
        clearInterval(slideTimer);
        slideTimer = setInterval(() => changeSlide(1), 5000);
    }
    
    setupTestimonials();
    
    // Button handlers
    const dreamBtn = document.querySelector('.dream-kitchen-btn');
    if (dreamBtn) {
        dreamBtn.addEventListener('click', function() {
            // TODO: implement modal or navigation
        });
    }
    
    const orderBtn = document.querySelector('.order-now-btn');
    if (orderBtn) {
        orderBtn.addEventListener('click', function() {
            // TODO: add order functionality
        });
    }
    
    // Simple scroll animations
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, { threshold: 0.1 });
    
    // Watch for fade-in elements
    document.querySelectorAll('[class*="animate-fade-in"]').forEach(el => {
        observer.observe(el);
    });
    

    
    // Mobile menu keyboard support
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    }
    

    
}); 