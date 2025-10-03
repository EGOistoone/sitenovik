(function(){
  // Newsletter subscription functionality
  const emailInput = document.getElementById('footer-email')
  const subscribeBtn = document.querySelector('.footer__subscribe-btn')

  if (subscribeBtn && emailInput) {
    subscribeBtn.addEventListener('click', function () {
      const email = emailInput.value.trim()

      if (!email) {
        emailInput.focus()
        emailInput.style.borderColor = 'var(--color-accent)'
        emailInput.setAttribute('placeholder', 'Пожалуйста, введите email')

        setTimeout(() => {
          emailInput.style.borderColor = 'var(--color-border)'
          emailInput.setAttribute('placeholder', 'Введите ваш email')
        }, 2000)

        return
      }

      // Простая валидация email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        emailInput.style.borderColor = 'var(--color-accent)'
        emailInput.setAttribute('placeholder', 'Введите корректный email')
        emailInput.value = ''

        setTimeout(() => {
          emailInput.style.borderColor = 'var(--color-border)'
          emailInput.setAttribute('placeholder', 'Введите ваш email')
        }, 2000)

        return
      }

      // Успешная подписка
      const originalText = subscribeBtn.textContent
      subscribeBtn.textContent = 'Подписка оформлена!'
      subscribeBtn.disabled = true
      emailInput.value = ''

      setTimeout(() => {
        subscribeBtn.textContent = originalText
        subscribeBtn.disabled = false
      }, 3000)
    })

    // Поддержка клавиши Enter
    emailInput.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        subscribeBtn.click()
      }
    })
  }

  // Эффекты при наведении на социальные ссылки
  const socialLinks = document.querySelectorAll('.footer__social-link')
  socialLinks.forEach((link) => {
    link.addEventListener('mouseenter', function () {
      this.style.transform = 'translateY(-3px) scale(1.08)'
    })

    link.addEventListener('mouseleave', function () {
      this.style.transform = 'translateY(-2px) scale(1.05)'
    })
  })

  // Плавное появление футера при скролле
  const footer = document.querySelector('.footer')
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards'
        }
      })
    },
    {
      threshold: 0.1,
    }
  )

  if (footer) {
    observer.observe(footer)
  }

  // Добавляем keyframes для анимации
  const style = document.createElement('style')
  style.textContent = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  `
  document.head.appendChild(style)
})()