
function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}


function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}















// Получаем элементы
const carousel = document.querySelector(".videoCarousel-container");
const arrowBtns = document.querySelectorAll("#scrollLeft, #scrollRight"); // Исправлено
let firstCardWidth;

// Ждем загрузки DOM
document.addEventListener("DOMContentLoaded", () => {
    if (carousel) {
        firstCardWidth = carousel.querySelector(".card").offsetWidth;
    }
});

// Кнопки навигации
if (arrowBtns.length > 0 && carousel) {
    arrowBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const scrollAmount = btn.id === "scrollLeft" ? -firstCardWidth : firstCardWidth;
            carousel.scrollBy({
                left: scrollAmount,
                behavior: "smooth"
            });
        });
    });
}

// Drag and drop функционал
if (carousel) {
    let isDragging = false;
    let startX;
    let startScrollLeft;
    
    // Для мыши
    const dragStart = (e) => {
        isDragging = true;
        carousel.classList.add("dragging");
        startX = e.pageX - carousel.offsetLeft;
        startScrollLeft = carousel.scrollLeft;
        carousel.style.cursor = 'grabbing';
    }
    
    const dragging = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 1.5;
        carousel.scrollLeft = startScrollLeft - walk;
    }
    
    const dragStop = () => {
        isDragging = false;
        carousel.classList.remove("dragging");
        carousel.style.cursor = 'grab';
    }
    
    // Для touch (мобильные устройства)
    const touchStart = (e) => {
        isDragging = true;
        carousel.classList.add("dragging");
        startX = e.touches[0].pageX - carousel.offsetLeft;
        startScrollLeft = carousel.scrollLeft;
    }
    
    const touchMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        
        const x = e.touches[0].pageX - carousel.offsetLeft;
        const walk = (x - startX) * 1.5;
        carousel.scrollLeft = startScrollLeft - walk;
    }
    
    // Обработчики для мыши
    carousel.addEventListener("mousedown", dragStart);
    window.addEventListener("mousemove", dragging);
    window.addEventListener("mouseup", dragStop);
    
    // Обработчики для touch
    carousel.addEventListener("touchstart", touchStart);
    window.addEventListener("touchmove", touchMove);
    window.addEventListener("touchend", dragStop);
    
    // Защита от случайных кликов
    let hasMoved = false;
    
    carousel.addEventListener("mousemove", () => {
        hasMoved = true;
    });
    
    carousel.addEventListener("mouseup", (e) => {
        if (hasMoved) {
            e.preventDefault();
            hasMoved = false;
        }
    });
    
    carousel.style.cursor = 'grab';
}







// ========== КАРУСЕЛЬ ОТЗЫВОВ ==========
// Получаем элементы



const opinionCarousel = document.querySelector(".opinionCarousel-container");
const opinionArrowBtns = document.querySelectorAll("#scrollLeftOpinion, #scrollRightOpinion");
let opinionFirstCardWidth;

// Ждем загрузки DOM
document.addEventListener("DOMContentLoaded", () => {
    if (opinionCarousel) {
        const firstCard = opinionCarousel.querySelector(".card-Opinion");
        if (firstCard) {
            opinionFirstCardWidth = firstCard.offsetWidth;
        }
    }
});

// Кнопки навигации
if (opinionArrowBtns.length > 0 && opinionCarousel) {
    opinionArrowBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const scrollAmount = btn.id === "scrollLeftOpinion" ? -opinionFirstCardWidth : opinionFirstCardWidth;
            opinionCarousel.scrollBy({
                left: scrollAmount,
                behavior: "smooth"
            });
        });
    });
}

// Drag and drop функционал
if (opinionCarousel) {
    let isDragging = false;
    let startX;
    let startScrollLeft;
    
    // Для мыши
    const dragStart = (e) => {
        isDragging = true;
        opinionCarousel.classList.add("dragging");
        startX = e.pageX - opinionCarousel.offsetLeft;
        startScrollLeft = opinionCarousel.scrollLeft;
        opinionCarousel.style.cursor = 'grabbing';
    }
    
    const dragging = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        
        const x = e.pageX - opinionCarousel.offsetLeft;
        const walk = (x - startX) * 1.5;
        opinionCarousel.scrollLeft = startScrollLeft - walk;
    }
    
    const dragStop = () => {
        isDragging = false;
        opinionCarousel.classList.remove("dragging");
        opinionCarousel.style.cursor = 'grab';
    }
    
    // Для touch (мобильные устройства)
    const touchStart = (e) => {
        isDragging = true;
        opinionCarousel.classList.add("dragging");
        startX = e.touches[0].pageX - opinionCarousel.offsetLeft;
        startScrollLeft = opinionCarousel.scrollLeft;
    }
    
    const touchMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        
        const x = e.touches[0].pageX - opinionCarousel.offsetLeft;
        const walk = (x - startX) * 1.5;
        opinionCarousel.scrollLeft = startScrollLeft - walk;
    }
    
    // Обработчики для мыши
    opinionCarousel.addEventListener("mousedown", dragStart);
    window.addEventListener("mousemove", dragging);
    window.addEventListener("mouseup", dragStop);
    
    // Обработчики для touch
    opinionCarousel.addEventListener("touchstart", touchStart);
    window.addEventListener("touchmove", touchMove);
    window.addEventListener("touchend", dragStop);
    
    // Защита от случайных кликов
    let hasMoved = false;
    
    opinionCarousel.addEventListener("mousemove", () => {
        hasMoved = true;
    });
    
    opinionCarousel.addEventListener("mouseup", (e) => {
        if (hasMoved) {
            e.preventDefault();
            hasMoved = false;
        }
    });
    
    opinionCarousel.style.cursor = 'grab';
}









/// ========== КАРУСЕЛЬ ВИДЕО ==========
// Получаем элементы




const videoCarousel = document.querySelector(".video-Carousel-container");
const videoArrowBtns = document.querySelectorAll("#scrollLeft, #scrollRight");
let videoFirstCardWidth;

// Функция для получения актуальной ширины карточки
function getVideoCardWidth() {
    if (videoCarousel) {
        const firstCard = videoCarousel.querySelector(".card-video");
        if (firstCard) {
            videoFirstCardWidth = firstCard.offsetWidth;
            return videoFirstCardWidth;
        }
    }
    return 300; // Значение по умолчанию
}

// Ждем загрузки DOM
document.addEventListener("DOMContentLoaded", () => {
    getVideoCardWidth();
    
    // Обновляем ширину при изменении размера окна
    window.addEventListener("resize", () => {
        getVideoCardWidth();
    });
});

// Кнопки навигации
if (videoArrowBtns.length > 0 && videoCarousel) {
    videoArrowBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const currentWidth = getVideoCardWidth();
            const scrollAmount = btn.id === "scrollLeft" ? -currentWidth : currentWidth;
            
            videoCarousel.scrollBy({
                left: scrollAmount,
                behavior: "smooth"
            });
        });
    });
}

// Drag and drop функционал
if (videoCarousel) {
    let isDragging = false;
    let startX;
    let startScrollLeft;
    
    // Для мыши
    const dragStart = (e) => {
        isDragging = true;
        videoCarousel.classList.add("dragging");
        startX = e.pageX - videoCarousel.offsetLeft;
        startScrollLeft = videoCarousel.scrollLeft;
        videoCarousel.style.cursor = 'grabbing';
    }
    
    const dragging = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        
        const x = e.pageX - videoCarousel.offsetLeft;
        const walk = (x - startX) * 1.5;
        videoCarousel.scrollLeft = startScrollLeft - walk;
    }
    
    const dragStop = () => {
        isDragging = false;
        videoCarousel.classList.remove("dragging");
        videoCarousel.style.cursor = 'grab';
    }
    
    // Для touch (мобильные устройства)
    const touchStart = (e) => {
        isDragging = true;
        videoCarousel.classList.add("dragging");
        startX = e.touches[0].pageX - videoCarousel.offsetLeft;
        startScrollLeft = videoCarousel.scrollLeft;
    }
    
    const touchMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        
        const x = e.touches[0].pageX - videoCarousel.offsetLeft;
        const walk = (x - startX) * 1.5;
        videoCarousel.scrollLeft = startScrollLeft - walk;
    }
    
    // Обработчики для мыши
    videoCarousel.addEventListener("mousedown", dragStart);
    window.addEventListener("mousemove", dragging);
    window.addEventListener("mouseup", dragStop);
    
    // Обработчики для touch
    videoCarousel.addEventListener("touchstart", touchStart);
    window.addEventListener("touchmove", touchMove);
    window.addEventListener("touchend", dragStop);
    
    // Защита от случайных кликов
    let hasMoved = false;
    
    videoCarousel.addEventListener("mousemove", () => {
        hasMoved = true;
    });
    
    videoCarousel.addEventListener("mouseup", (e) => {
        if (hasMoved) {
            e.preventDefault();
            hasMoved = false;
        }
    });
    
    videoCarousel.style.cursor = 'grab';
}





//popUpDialog


const enrolButton = document.querySelector('#buttonOpinion1')
const enrolDialog = document.querySelector('#enrolOpinionDialog1')
const closeModel = enrolDialog.querySelector('#closeDialog1')



enrolButton.addEventListener('click', () => {
    enrolDialog.showModal();

})

closeModel.addEventListener('click', () => {
    enrolDialog.close();

})








