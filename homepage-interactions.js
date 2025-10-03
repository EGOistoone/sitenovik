(function(){
  // Intersection Observer для анимаций появления
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1'
        entry.target.style.transform = 'translateY(0)'
      }
    })
  }, observerOptions)

  
  // Применяем анимацию появления к секциям
  const sections = document.querySelectorAll(
    '.about-section, .exhibitions-section1, .gallery-section, .news-section'
  )
  sections.forEach((section) => {
    section.style.opacity = '0'
    section.style.transform = 'translateY(30px)'
    section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out'
    observer.observe(section)
  })

  // Анимация для карточек выставок
  const exhibitionCards = document.querySelectorAll('.exhibition-card')
  exhibitionCards.forEach((card, index) => {
    card.style.opacity = '0'
    card.style.transform = 'translateY(30px)'
    card.style.transition = `opacity 0.6s ease-out ${
      index * 0.1
    }s, transform 0.6s ease-out ${index * 0.1}s`

    observer.observe(card)
  })

  // Ленивая загрузка изображений
  const images = document.querySelectorAll('img')
  images.forEach((img) => {
    img.style.transition = 'opacity 0.3s ease-out'

    if (img.complete) {
      img.style.opacity = '1'
    } else {
      img.style.opacity = '0'
      img.addEventListener('load', () => {
        img.style.opacity = '1'
      })
    }
  })

  // Эффекты при наведении на изображения галереи
  const galleryImages = document.querySelectorAll(
    '.gallery-image, .media-image'
  )
  galleryImages.forEach((img) => {
    img.addEventListener('mouseenter', () => {
      img.style.filter = 'brightness(1.1) contrast(1.1)'
    })

    img.addEventListener('mouseleave', () => {
      img.style.filter = 'brightness(1) contrast(1)'
    })
  })
})()

(function(){
  // Анимация появления секций при скролле
  const sections = document.querySelectorAll(
    '.founder-section, .about-section, .exhibitions-section1, .gallery-section, .team-section, .documents-section'
  );
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  sections.forEach((section) => {
    observer.observe(section);
  });

  // Оптимизация для касаний
  document.addEventListener('touchstart', function() {}, {passive: true});
  
  // Предотвращаем масштабирование при двойном тапе
  let lastTouchEnd = 0;
  document.addEventListener('touchend', function (event) {
    const now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
      event.preventDefault();
    }
    lastTouchEnd = now;
  }, false);

  // Улучшаем производительность анимаций
  const animatedElements = document.querySelectorAll('.btn, .navigation-link, .footer__social-link, .document-button');
  animatedElements.forEach(el => {
    el.style.willChange = 'transform, opacity';
  });
})();