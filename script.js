const slide = document.getElementById('carousel-slide');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const indicators = document.getElementById('indicators');
const totalSlides = slide.children.length;
let currentIndex = 0;

// Criar pontinhos de navegação
for (let i = 0; i < totalSlides; i++) {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('active');
  dot.addEventListener('click', () => goToSlide(i));
  indicators.appendChild(dot);
}

const dots = document.querySelectorAll('.dot');

function updateSlide() {
  slide.style.transform = `translateX(-${currentIndex * 100}vw)`;
  dots.forEach((dot, i) => dot.classList.toggle('active', i === currentIndex));
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlide();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlide();
}

function goToSlide(index) {
  currentIndex = index;
  updateSlide();
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Auto play (muda a cada 4 segundos)
setInterval(nextSlide, 4000);