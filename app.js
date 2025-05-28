lucide.createIcons();
document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();

  const bell = document.getElementById('bell');
  function ringBell() {
    bell.classList.add('ringing');
    setTimeout(() => bell.classList.remove('ringing'), 500);
  }
  setInterval(ringBell, 1000);
});

  // 2. Featured Jobs - click to loop
  const jobTrack = document.querySelector('.carousel-track');
let jobCards = document.querySelectorAll('.job-card');
const leftBtn = document.querySelector('.carousel-btn.left');
const rightBtn = document.querySelector('.carousel-btn.right');


jobCards.forEach(card => {
  const clone = card.cloneNode(true);
  jobTrack.appendChild(clone);
});

jobCards = document.querySelectorAll('.job-card');

let index = 0;
const cardWidth = 280;

function updateScroll() {
  jobTrack.style.transition = 'transform 0.5s ease-in-out';
  jobTrack.style.transform = `translateX(-${index * cardWidth}px)`;
}

rightBtn.addEventListener('click', () => {
  index = (index + 1) % jobCards.length;
  updateScroll();
});

leftBtn.addEventListener('click', () => {
  index = (index - 1 + jobCards.length) % jobCards.length;
  updateScroll();
});


// 3. Hero Animation Delay on Page Load
window.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero-content');

  if (hero) {
    hero.style.opacity = 0;
    hero.style.transform = 'translateY(40px)';

    setTimeout(() => {
      hero.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
      hero.style.opacity = 1;
      hero.style.transform = 'translateY(0)';
    }, 50); 
  }
});

 AOS.init({ duration: 1000, once: true });

    // Blur effect on scroll
    const blurOverlay = document.getElementById("blurOverlay");
    let ticking = false;

    window.addEventListener("scroll", () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          blurOverlay.classList.add("blur-active");
          clearTimeout(blurOverlay.timeout);
          blurOverlay.timeout = setTimeout(() => {
            blurOverlay.classList.remove("blur-active");
          }, 300);
          ticking = false;
        });
        ticking = true;
      }
    });

    const splineViewer = document.getElementById("splineScene");
    const content = document.getElementById("heroContent");

    splineViewer.addEventListener("load", () => {
      content.classList.remove("hidden");
    });
    
