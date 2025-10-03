// gallery.js - ОБНОВЛЕННАЯ ВЕРСИЯ
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  const modalCaption = document.getElementById('modalCaption');
  const closeBtn = document.querySelector('.modal-close');
  const prevBtn = document.querySelector('.modal-prev');
  const nextBtn = document.querySelector('.modal-next');
  
  // Получаем все элементы галереи и overlay
  const galleryItems = document.querySelectorAll('.gallery-item');
  let currentIndex = 0;
  
  // Добавляем обработчики клика на изображения
  galleryItems.forEach((item, index) => {
    const img = item.querySelector('img');
    img.style.cursor = 'pointer';
    
    item.addEventListener('click', function() {
      currentIndex = index;
      openModal(this);
    });
  });
  
  // Открытие модального окна
  function openModal(galleryItem) {
    const img = galleryItem.querySelector('img');
    const overlay = galleryItem.querySelector('.gallery-overlay');
    const description = overlay ? overlay.querySelector('.gallery-description') : null;
    
    modal.style.display = 'block';
    modalImg.src = img.src;
    
    // Берем текст из overlay как при наведении
    if (description) {
      modalCaption.textContent = description.textContent;
    } else {
      modalCaption.textContent = img.alt;
    }
    
    document.body.style.overflow = 'hidden';
  }
  
  // Закрытие модального окна
  function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
  
  // Навигация
  function showImage(index) {
    if (index >= 0 && index < galleryItems.length) {
      currentIndex = index;
      const galleryItem = galleryItems[currentIndex];
      const img = galleryItem.querySelector('img');
      const overlay = galleryItem.querySelector('.gallery-overlay');
      const description = overlay ? overlay.querySelector('.gallery-description') : null;
      
      modalImg.src = img.src;
      
      if (description) {
        modalCaption.textContent = description.textContent;
      } else {
        modalCaption.textContent = img.alt;
      }
    }
  }
  
  // Обработчики событий
  closeBtn.addEventListener('click', closeModal);
  
  prevBtn.addEventListener('click', function() {
    showImage(currentIndex - 1);
  });
  
  nextBtn.addEventListener('click', function() {
    showImage(currentIndex + 1);
  });
  
  // Закрытие по клику вне изображения
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeModal();
    }
  });
  
  // Закрытие по ESC
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeModal();
    } else if (e.key === 'ArrowLeft') {
      showImage(currentIndex - 1);
    } else if (e.key === 'ArrowRight') {
      showImage(currentIndex + 1);
    }
  });
});