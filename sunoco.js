/**
 * Sunoco Pitch Deck Presentation Logic - Premium Scrollytelling Edition
 * Handles scroll-snapping detection, active slide updates, custom canvas animation,
 * dynamic SVG racetrack indicators with rotating car, Apple-style scroll zoom reveals,
 * reading progress bar, counter animations, and cursor spotlights.
 */

document.addEventListener('DOMContentLoaded', () => {
    const deckContainer = document.getElementById('deck-container');
    const slides = document.querySelectorAll('.slide');
    const slideNumberEl = document.getElementById('slide-number');
    const progressFillEl = document.getElementById('progress-fill');
    
    let currentActiveIndex = 0;
    
    // Slide list metadata for racetrack checkpoints
    const slideInfo = [
        { index: 0, label: "01 Cover" },
        { index: 1, label: "02 Why This Moment" },
        { index: 2, label: "03 Our Perspective" },
        { index: 3, label: "04 Our Approach" },
        { index: 4, label: "05 Strategic Planning" },
        { index: 5, label: "06 Campaign Dev" },
        { index: 6, label: "07 Engagement" },
        { index: 7, label: "08 Media & Perf" },
        { index: 8, label: "09 Operating Rhythm" },
        { index: 9, label: "10 Experience" },
        { index: 10, label: "11 The Team" },
        { index: 11, label: "12 Network" },
        { index: 12, label: "13 Success Measured" },
        { index: 13, label: "14 Services Retainer" },
        { index: 14, label: "15 Media Retainer" },
        { index: 15, label: "16 Media Investment" },
        { index: 16, label: "17 Assumptions" },
        { index: 17, label: "18 Add Services" },
        { index: 18, label: "19 Let's Build" }
    ];

    // ==========================================
    // 1. Initialize Racetrack Checkpoints along the SVG Path
    // ==========================================
    const checkpointsContainer = document.getElementById('racetrack-checkpoints');
    const basePath = document.getElementById('racetrack-path-base');
    
    function initCheckpoints() {
        if (checkpointsContainer && basePath) {
            // Clear existing checkpoints if any
            checkpointsContainer.innerHTML = '';
            const pathLength = basePath.getTotalLength();
            
            slideInfo.forEach((slide, idx) => {
                const dist = (idx / (slideInfo.length - 1)) * pathLength;
                const pt = basePath.getPointAtLength(dist);
                
                const checkpoint = document.createElement('div');
                checkpoint.className = 'racetrack-checkpoint';
                if (idx === 0) checkpoint.classList.add('active');
                checkpoint.setAttribute('data-slide', idx);
                
                // Map SVG coordinate space (0-80, 0-800) to percentages
                checkpoint.style.left = `${(pt.x / 80) * 100}%`;
                checkpoint.style.top = `${(pt.y / 800) * 100}%`;
                
                checkpoint.innerHTML = `
                    <span class="checkpoint-dot"></span>
                    <span class="checkpoint-label">${slide.label}</span>
                `;
                
                checkpoint.addEventListener('click', () => {
                    scrollToSlide(idx);
                });
                
                checkpointsContainer.appendChild(checkpoint);
            });
        }
    }
    
    // Initialize checkpoints
    initCheckpoints();
    
    // In case fonts or SVG render slightly later, wait and recalculate once
    setTimeout(initCheckpoints, 500);

    // ==========================================
    // 2. Intersection Observer for Slide Active State
    // ==========================================
    const observerOptions = {
        root: deckContainer,
        threshold: 0.5, // Trigger when slide occupies more than 50% viewport
        rootMargin: '0px'
    };

    const slideObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const activeSlide = entry.target;
                const index = Array.from(slides).indexOf(activeSlide);
                
                if (index !== -1) {
                    setActiveSlide(index);
                }
            }
        });
    }, observerOptions);

    slides.forEach(slide => {
        slideObserver.observe(slide);
    });

    // ==========================================
    // 3. Set Active Slide State (UI Updates)
    // ==========================================
    function setActiveSlide(index) {
        currentActiveIndex = index;

        // Reset all slides and make current active
        slides.forEach((slide, idx) => {
            if (idx === index) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });

        // Update Racetrack Checkpoints active state
        const checkpoints = document.querySelectorAll('.racetrack-checkpoint');
        checkpoints.forEach((cp, idx) => {
            if (idx === index) {
                cp.classList.add('active');
            } else {
                cp.classList.remove('active');
            }
        });

        // Update Footer Info
        const displayIndex = (index + 1).toString().padStart(2, '0');
        const totalSlides = slides.length.toString().padStart(2, '0');
        slideNumberEl.textContent = `${displayIndex} / ${totalSlides}`;

        // Update Reading Progress Bar
        const percentage = ((index + 1) / slides.length) * 100;
        progressFillEl.style.width = `${percentage}%`;

        // Trigger Counter Animations on Slide 10
        if (index === 9) { // Slide 10 is index 9
            animateCounters(slides[index]);
        }
    }

    // Make scrollToSlide global so it can be called from button controls
    window.scrollToSlide = function(index) {
        if (slides[index]) {
            slides[index].scrollIntoView({ behavior: 'smooth' });
            setActiveSlide(index);
        }
    };

    // ==========================================
    // 4. Counter Animation logic (Slide 10)
    // ==========================================
    function animateCounters(activeSlide) {
        const counters = activeSlide.querySelectorAll('.counter');
        counters.forEach(counter => {
            if (counter.classList.contains('animated')) return;
            
            const targetVal = parseInt(counter.getAttribute('data-target'), 10);
            const duration = 2000; // ms
            const stepTime = 30; // ms
            const steps = Math.ceil(duration / stepTime);
            const increment = targetVal / steps;
            let current = 0;
            let stepCount = 0;

            const timer = setInterval(() => {
                current += increment;
                stepCount++;
                
                if (stepCount >= steps) {
                    counter.textContent = targetVal;
                    clearInterval(timer);
                    counter.classList.add('animated');
                } else {
                    counter.textContent = Math.floor(current);
                }
            }, stepTime);
        });
    }

    // ==========================================
    // 5. Scroll Handler: Racetrack Draw, Car Position & Apple Zoom transitions
    // ==========================================
    let isScrolling = false;
    deckContainer.addEventListener('scroll', () => {
        if (!isScrolling) {
            window.requestAnimationFrame(() => {
                handleScrollEffects();
                isScrolling = false;
            });
            isScrolling = true;
        }
    });

    function handleScrollEffects() {
        const scrollTop = deckContainer.scrollTop;
        const viewportHeight = window.innerHeight;
        const scrollHeight = deckContainer.scrollHeight;
        
        // Total scroll progress percentage
        const maxScroll = scrollHeight - viewportHeight;
        const scrollPercent = maxScroll > 0 ? scrollTop / maxScroll : 0;
        
        // 1. Draw racetrack path
        const activePath = document.getElementById('racetrack-path-active');
        if (activePath) {
            const totalLength = activePath.getTotalLength();
            const drawLength = totalLength * scrollPercent;
            activePath.style.strokeDasharray = `${totalLength}`;
            activePath.style.strokeDashoffset = `${totalLength - drawLength}`;
            
            // 2. Position and rotate the car
            const car = document.getElementById('racetrack-car');
            if (car) {
                const p = activePath.getPointAtLength(drawLength);
                const nextDist = Math.min(drawLength + 3, totalLength);
                const pNext = activePath.getPointAtLength(nextDist);
                
                const angle = Math.atan2(pNext.y - p.y, pNext.x - p.x) * 180 / Math.PI;
                
                // Position percentages
                car.style.left = `${(p.x / 80) * 100}%`;
                car.style.top = `${(p.y / 800) * 100}%`;
                car.style.transform = `translate(-50%, -50%) rotate(${angle - 90}deg)`;
            }
        }
        
        // 3. Apple-style Zoom and Parallax Transitions on visible slides
        slides.forEach((slide, idx) => {
            const bg = slide.querySelector('.slide-bg, .slide-bg-split');
            const content = slide.querySelector('.slide-content');
            
            const slideTop = slide.offsetTop;
            const slideHeight = slide.offsetHeight;
            const offset = scrollTop - slideTop;
            const ratio = offset / slideHeight; // -1 to 1
            
            if (Math.abs(ratio) < 1) {
                // Background transform
                if (bg) {
                    let scale = 1.05;
                    let opacity = 1;
                    let yOffset = ratio * 60; // Parallax translation
                    
                    if (ratio < 0) {
                        // Leaving slide (scrolling up)
                        scale = 1.05 - Math.abs(ratio) * 0.15; // Shrinks down
                        opacity = 1 - Math.abs(ratio) * 0.9;
                    } else {
                        // Entering slide (scrolling down)
                        scale = 1.05 + ratio * 0.15; // Enters from zoom
                        opacity = 1 - ratio * 0.9;
                    }
                    
                    bg.style.transform = `scale(${scale}) translateY(${yOffset}px)`;
                    bg.style.opacity = opacity;
                }
                
                // Content transform
                if (content) {
                    const contentOpacity = 1 - Math.abs(ratio) * 1.6;
                    const contentY = ratio * -100; // Floating layered effect
                    content.style.opacity = Math.max(0, contentOpacity);
                    content.style.transform = `translateY(${contentY}px)`;
                }
            } else {
                // Clean up styles for off-screen slides
                if (bg) {
                    bg.style.transform = '';
                    bg.style.opacity = 0;
                }
                if (content) {
                    content.style.opacity = 0;
                    content.style.transform = '';
                }
            }
        });
    }

    // Call scroll effects initially to set correct layout states on load
    handleScrollEffects();

    // ==========================================
    // 6. Interactive Network Constellation (Slide 12)
    // ==========================================
    const canvas = document.getElementById('constellation-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        
        let width = canvas.width = canvas.offsetWidth;
        let height = canvas.height = canvas.offsetHeight;
        
        window.addEventListener('resize', () => {
            if (canvas.offsetWidth > 0 && canvas.offsetHeight > 0) {
                width = canvas.width = canvas.offsetWidth;
                height = canvas.height = canvas.offsetHeight;
            }
        });

        const particles = [];
        const particleCount = 45;
        const connectionDistance = 120;
        
        const centralNode = {
            x: width * 0.7,
            y: height * 0.5,
            radius: 12,
            color: '#FFE600', // Sunoco Yellow
            glow: 20
        };

        class Particle {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.radius = Math.random() * 2 + 2;
                this.speedX = (Math.random() - 0.5) * 0.4;
                this.speedY = (Math.random() - 0.5) * 0.4;
                this.opacity = Math.random() * 0.5 + 0.3;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x < 0 || this.x > width) this.speedX *= -1;
                if (this.y < 0 || this.y > height) this.speedY *= -1;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
                ctx.fill();
            }
        }

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        function animateConstellation() {
            ctx.clearRect(0, 0, width, height);

            centralNode.x = width * 0.7;
            centralNode.y = height * 0.5;

            ctx.beginPath();
            const glowGradient = ctx.createRadialGradient(
                centralNode.x, centralNode.y, 1, 
                centralNode.x, centralNode.y, centralNode.glow * 2
            );
            glowGradient.addColorStop(0, 'rgba(255, 230, 0, 0.4)');
            glowGradient.addColorStop(0.5, 'rgba(255, 230, 0, 0.15)');
            glowGradient.addColorStop(1, 'rgba(255, 230, 0, 0)');
            ctx.arc(centralNode.x, centralNode.y, centralNode.glow * 2, 0, Math.PI * 2);
            ctx.fillStyle = glowGradient;
            ctx.fill();

            ctx.beginPath();
            ctx.arc(centralNode.x, centralNode.y, centralNode.radius, 0, Math.PI * 2);
            ctx.fillStyle = centralNode.color;
            ctx.shadowColor = '#FFE600';
            ctx.shadowBlur = 10;
            ctx.fill();
            ctx.shadowBlur = 0;

            particles.forEach((p, idx) => {
                p.update();
                p.draw();

                for (let j = idx + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dist = Math.hypot(p.x - p2.x, p.y - p2.y);

                    if (dist < connectionDistance) {
                        const alpha = (1 - dist / connectionDistance) * 0.15;
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }

                const distToCenter = Math.hypot(p.x - centralNode.x, p.y - centralNode.y);
                if (distToCenter < connectionDistance * 2.2) {
                    const alpha = (1 - distToCenter / (connectionDistance * 2.2)) * 0.25;
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(centralNode.x, centralNode.y);
                    ctx.strokeStyle = `rgba(255, 230, 0, ${alpha})`;
                    ctx.lineWidth = 0.7;
                    ctx.stroke();
                }
            });

            animationFrameId = requestAnimationFrame(animateConstellation);
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    cancelAnimationFrame(animationFrameId);
                    animateConstellation();
                } else {
                    cancelAnimationFrame(animationFrameId);
                }
            });
        }, { threshold: 0.1 });

        const slide12 = document.getElementById('slide-12');
        if (slide12) {
            observer.observe(slide12);
        }
    }

    // ==========================================
    // 7. Interactive 3D Card Tilting & Spotlight Effect
    // ==========================================
    const tiltCards = document.querySelectorAll('.glass-stat-card, .kpi-card, .rhythm-block, .team-card, .investment-tag-card, .service-icon-card, .quadrant-card');
    
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const xc = rect.width / 2;
            const yc = rect.height / 2;
            
            const maxTilt = 8;
            const rotateX = ((yc - y) / yc) * maxTilt;
            const rotateY = ((x - xc) / xc) * maxTilt;
            
            // 3D Tilt + Cursor radial gradient spotlight reflection
            card.style.background = `radial-gradient(circle 250px at ${x}px ${y}px, rgba(255, 230, 0, 0.15) 0%, rgba(3, 30, 63, 0.65) 80%)`;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
            card.style.boxShadow = `0 15px 30px rgba(255, 230, 0, 0.15), 0 30px 60px rgba(0, 0, 0, 0.6)`;
            card.style.borderColor = `rgba(255, 230, 0, 0.4)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
            card.style.background = '';
            card.style.boxShadow = '';
            card.style.borderColor = '';
        });
    });
});
