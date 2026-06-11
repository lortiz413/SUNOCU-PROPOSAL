/**
 * Sunoco Pitch Deck Presentation Logic
 * Handles scroll-snapping detection, active slide updates, custom canvas animation,
 * navigation dots synchronization, progress bars, and animated statistics.
 */

document.addEventListener('DOMContentLoaded', () => {
    const deckContainer = document.getElementById('deck-container');
    const slides = document.querySelectorAll('.slide');
    const navItems = document.querySelectorAll('#nav-indicators li');
    const slideNumberEl = document.getElementById('slide-number');
    const progressFillEl = document.getElementById('progress-fill');
    
    let currentActiveIndex = 0;
    
    // ==========================================
    // 1. Intersection Observer for Slide Active State
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
    // 2. Set Active Slide State (UI Updates)
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

        // Update Nav Indicators
        navItems.forEach((item, idx) => {
            if (idx === index) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });

        // Update Footer Info
        const displayIndex = (index + 1).toString().padStart(2, '0');
        const totalSlides = slides.length.toString().padStart(2, '0');
        slideNumberEl.textContent = `${displayIndex} / ${totalSlides}`;

        // Update Progress Bar
        const percentage = ((index + 1) / slides.length) * 100;
        progressFillEl.style.width = `${percentage}%`;

        // Trigger Counter Animations on Slide 10
        if (index === 9) { // Slide 10 is index 9
            animateCounters(slides[index]);
        }
    }

    // ==========================================
    // 3. Navigation Click Navigation Handlers
    // ==========================================
    navItems.forEach((item) => {
        item.addEventListener('click', () => {
            const slideIdx = parseInt(item.getAttribute('data-slide'), 10);
            scrollToSlide(slideIdx);
        });
    });

    // Make scrollToSlide global so it can be called from buttons (Slide 19)
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
            // If already animated, skip
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
    // 5. Parallax Background Simulation on Scroll
    // ==========================================
    deckContainer.addEventListener('scroll', () => {
        const scrollTop = deckContainer.scrollTop;
        const viewportHeight = window.innerHeight;
        
        slides.forEach((slide, idx) => {
            const bg = slide.querySelector('.slide-bg');
            if (bg) {
                // Calculate slide relative position in viewport
                const slideTop = idx * viewportHeight;
                const offset = scrollTop - slideTop;
                
                // If slide is partially visible, shift background
                if (Math.abs(offset) < viewportHeight) {
                    const yPos = -(offset * 0.35); // Parallax factor (increased for stronger depth)
                    bg.style.transform = `scale(1.1) translateY(${yPos}px)`;
                }
            }
        });
    });

    // ==========================================
    // 6. Interactive Network Constellation (Slide 12)
    // ==========================================
    const canvas = document.getElementById('constellation-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        
        let width = canvas.width = canvas.offsetWidth;
        let height = canvas.height = canvas.offsetHeight;
        
        // Handle resize
        window.addEventListener('resize', () => {
            if (canvas.offsetWidth > 0 && canvas.offsetHeight > 0) {
                width = canvas.width = canvas.offsetWidth;
                height = canvas.height = canvas.offsetHeight;
            }
        });

        // Constellation settings
        const particles = [];
        const particleCount = 45;
        const connectionDistance = 120;
        
        // Central Node (Hub representation: Peerless Oil Puerto Rico)
        const centralNode = {
            x: width * 0.7,
            y: height * 0.5,
            radius: 12,
            color: '#FFE600', // Sunoco Yellow
            glow: 20
        };

        // Initialize particles
        class Particle {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.radius = Math.random() * 2 + 2; // smaller dots
                this.speedX = (Math.random() - 0.5) * 0.4;
                this.speedY = (Math.random() - 0.5) * 0.4;
                this.opacity = Math.random() * 0.5 + 0.3;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                // Bounce at edges
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

        // Animation Loop
        function animateConstellation() {
            ctx.clearRect(0, 0, width, height);

            // Dynamically adjust center position in case layout resized
            centralNode.x = width * 0.7;
            centralNode.y = height * 0.5;

            // Draw central node glow
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

            // Draw central node core
            ctx.beginPath();
            ctx.arc(centralNode.x, centralNode.y, centralNode.radius, 0, Math.PI * 2);
            ctx.fillStyle = centralNode.color;
            ctx.shadowColor = '#FFE600';
            ctx.shadowBlur = 10;
            ctx.fill();
            ctx.shadowBlur = 0; // Reset shadow blur

            // Update & Draw particles
            particles.forEach((p, idx) => {
                p.update();
                p.draw();

                // Draw connections between particles
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

                // Draw connection to the central node
                const distToCenter = Math.hypot(p.x - centralNode.x, p.y - centralNode.y);
                if (distToCenter < connectionDistance * 2.2) {
                    const alpha = (1 - distToCenter / (connectionDistance * 2.2)) * 0.25;
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(centralNode.x, centralNode.y);
                    // Yellow connections to main hub
                    ctx.strokeStyle = `rgba(255, 230, 0, ${alpha})`;
                    ctx.lineWidth = 0.7;
                    ctx.stroke();
                }
            });

            animationFrameId = requestAnimationFrame(animateConstellation);
        }

        // Play/Pause canvas loop based on if Slide 12 is active (saves CPU/battery)
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Start canvas loop
                    cancelAnimationFrame(animationFrameId);
                    animateConstellation();
                } else {
                    // Stop loop
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
    // 7. Interactive 3D Card Tilting Effect
    // ==========================================
    const tiltCards = document.querySelectorAll('.glass-stat-card, .kpi-card, .rhythm-block, .team-card, .investment-tag-card, .service-icon-card, .quadrant-card');
    
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Calculate relative offset from center of card (-0.5 to 0.5)
            const xc = rect.width / 2;
            const yc = rect.height / 2;
            
            // Maximum tilt rotation (degrees)
            const maxTilt = 8;
            const rotateX = ((yc - y) / yc) * maxTilt;
            const rotateY = ((x - xc) / xc) * maxTilt;
            
            // Apply style transformations
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
            card.style.boxShadow = `0 15px 30px rgba(255, 230, 0, 0.15), 0 30px 60px rgba(0, 0, 0, 0.6)`;
            card.style.borderColor = `rgba(255, 230, 0, 0.4)`;
        });
        
        card.addEventListener('mouseleave', () => {
            // Smoothly reset transformations on leave
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
            card.style.boxShadow = '';
            card.style.borderColor = '';
        });
    });
});
