const images = [
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1741986947217-d1a0ecc39149?auto=format&fit=crop&w=1200&q=80',
    'https://plus.unsplash.com/premium_photo-1690446955129-7248ac32faaa?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1741893041975-94a0e8656209?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1739959272086-afc87e72776b?auto=format&fit=crop&w=1200&q=80'
];

let currentIndex = 0;
const slidesContainer = document.querySelector('.slides');
const dotsContainer = document.querySelector('.dots-container');

// Create slides
images.forEach((src, index) => {
    const slide = document.createElement('div');
    slide.className = `slide ${index === 0 ? 'active' : ''}`;
    
    const img = document.createElement('img');
    img.src = src;
    img.alt = `Slide ${index + 1}`;
    
    slide.appendChild(img);
    slidesContainer.appendChild(slide);

    // Create dot
    const dot = document.createElement('button');
    dot.className = `dot ${index === 0 ? 'active' : ''}`;
    dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
});

function updateSlides() {
    document.querySelectorAll('.slide').forEach((slide, index) => {
        slide.className = `slide ${index === currentIndex ? 'active' : ''}`;
    });
    
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.className = `dot ${index === currentIndex ? 'active' : ''}`;
    });
}

function goToSlide(index) {
    currentIndex = index;
    updateSlides();
}

function goToPrevious() {
    currentIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    updateSlides();
}

function goToNext() {
    currentIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    updateSlides();
}

// Add click event listeners
document.querySelector('.prev').addEventListener('click', goToPrevious);
document.querySelector('.next').addEventListener('click', goToNext);

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
});