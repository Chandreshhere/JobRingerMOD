// Load Lucide icons
lucide.createIcons();

// Animate the bell every second
const bell = document.getElementById('bell');

function ringBell() {
  bell.classList.add('ringing');
  setTimeout(() => bell.classList.remove('ringing'), 500);
}

setInterval(ringBell, 1000);
