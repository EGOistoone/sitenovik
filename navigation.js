(function(){
  const navigationToggle = document.getElementById('navigationToggle')
  const navigationMenu = document.getElementById('navigationMenu')
  const navigationLinks = document.querySelectorAll('.navigation-link')

  let isMenuOpen = false

  function toggleMenu() {
    isMenuOpen = !isMenuOpen

    if (isMenuOpen) {
      navigationMenu.classList.add('navigation-active')
      navigationToggle.setAttribute('aria-expanded', 'true')
      navigationToggle.setAttribute('aria-label', 'Закрыть меню навигации')
      document.body.style.overflow = 'hidden'
    } else {
      navigationMenu.classList.remove('navigation-active')
      navigationToggle.setAttribute('aria-expanded', 'false')
      navigationToggle.setAttribute('aria-label', 'Открыть меню навигации')
      document.body.style.overflow = ''
    }
  }

  navigationToggle.addEventListener('click', toggleMenu)


  
  // Плавная прокрутка для якорных ссылок
  navigationLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      const targetId = link.closest('a').getAttribute('href')
      
      if (targetId.startsWith('#')) {
        const targetSection = document.querySelector(targetId)
        if (targetSection) {
          const offsetTop = targetSection.offsetTop - 80
          
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          })
        }
      }

      // Закрываем меню на мобильных
      if (window.innerWidth <= 991 && isMenuOpen) {
        toggleMenu()
      }
    })
  })

  window.addEventListener('resize', () => {
    if (window.innerWidth > 991 && isMenuOpen) {
      navigationMenu.classList.remove('navigation-active')
      navigationToggle.setAttribute('aria-expanded', 'false')
      navigationToggle.setAttribute('aria-label', 'Открыть меню навигации')
      document.body.style.overflow = ''
      isMenuOpen = false
    }
  })

  let lastScrollY = window.scrollY

  window.addEventListener('scroll', () => {
    const navigation = document.getElementById('navigation')
    const currentScrollY = window.scrollY

    if (currentScrollY > 100) {
      navigation.style.background = 'color-mix(in srgb, var(--color-surface) 98%, transparent)'
      navigation.style.boxShadow = 'var(--shadow-level-2)'
    } else {
      navigation.style.background = 'color-mix(in srgb, var(--color-surface) 95%, transparent)'
      navigation.style.boxShadow = 'none'
    }

    if (currentScrollY > lastScrollY && currentScrollY > 200 && !isMenuOpen) {
      navigation.style.transform = 'translateY(-100%)'
    } else {
      navigation.style.transform = 'translateY(0)'
    }

    lastScrollY = currentScrollY
  })
})()

const navigationLinks = document.querySelectorAll('.navigation-link')

navigationLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault()
    const targetId = link.closest('a').getAttribute('href')
    
    if (targetId.startsWith('#')) {
      const targetSection = document.querySelector(targetId)
      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80
        
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        })
      }
    }

    // Закрываем меню на мобильных
    if (window.innerWidth <= 991 && isMenuOpen) {
      toggleMenu()
    }
  })
})