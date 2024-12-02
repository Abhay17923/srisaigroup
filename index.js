 let currentSlide = 0;
 const slideInterval = 3000; 

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const carouselInner = document.querySelector('.carousel-inner');
    const thumbnails = document.querySelectorAll('.carousel-thumbnails img');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentSlide = 0;
        carouselInner.style.transition = 'none'; 
        carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;
        setTimeout(() => {
            carouselInner.style.transition = 'transform 0.5s ease-in-out'; 
        }, 20); 
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
        carouselInner.style.transition = 'none'; 
        carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;
        setTimeout(() => {
            carouselInner.style.transition = 'transform 0.5s ease-in-out'; 
        }, 20); 
    } else {
        currentSlide = index;
        carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;
    }


    thumbnails.forEach((thumbnail, i) => {
        thumbnail.classList.toggle('active', i === currentSlide);
    });
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

showSlide(currentSlide);
setInterval(nextSlide, slideInterval);




function filterTabs(category) {
    const contents = document.querySelectorAll('.tab-content');
    
    contents.forEach(content => {
        if (content.classList.contains(category)) {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    });

    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => {
        if (button.innerText.toLowerCase().includes(category)) {
            // button.style.backgroundColor = '#ccc';
        } else {
            // button.style.backgroundColor = '#f0f0f0';
        }
    });
}
filterTabs('category1');


document.querySelectorAll('.accordion-button').forEach(button => { 
    button.addEventListener('click', () => { 
        const accordionContent = button.nextElementSibling; 
        const isActive = button.classList.contains('active'); 
        document.querySelectorAll('.accordion-content').forEach(content => { 
            content.style.maxHeight = 0; 
        }); 
        document.querySelectorAll('.accordion-button').forEach(btn => { 
            btn.classList.remove('active'); 
        }); if (!isActive) { 
            button.classList.add('active'); 
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'; 
        } else { 
            button.classList.remove('active'); 
            accordionContent.style.maxHeight = 0; 
        } 
    }); 
});