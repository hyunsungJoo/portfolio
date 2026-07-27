<template>
    <div class="contact">
      <h2>Contact</h2>
      <p class="description">
        컴퓨터공학과를 졸업하였고 부트캠프 경험을 통해 여러 프로젝트를 설계하고 구현해 왔습니다.
        <br>Frontend, Backend, Devops를 포괄하는 종합적인 기술 세트를 활용하는 데 능숙합니다. 
      </p>
      <p class="email">
        <img src="@/assets/email-icon.png" alt="Email Icon" class="email-icon">
        joocurtis@gmail.com
      </p>
      <p class="phone">
        <img src="@/assets/phone-icon.png" alt="Email Icon" class="email-icon">
        +82 10-6337-1867
      </p>
      <!-- <div class="social-icons">
        <a href="https://github.com" target="_blank">
          <img src="@/assets/github-icon.png" alt="GitHub" class="social-icon">
        </a>
        <a href="https://velog.io" target="_blank">
          <img src="@/assets/velog-icon.png" alt="Velog" class="social-icon">
        </a>
      </div> -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactMe'
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

  .contact {
    padding: 5rem 2rem;
    background-color: var(--bg-primary);
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    transition: background-color 0.3s ease;
  }

  .contact h2 {
    font-size: 36px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 2rem;
    color: var(--text-primary);
    letter-spacing: -1px;
    transition: color 0.3s ease;
  }

  .contact .description {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.8;
    max-width: 700px;
    margin: 0 auto 2.5rem;
    text-align: center;
    color: var(--text-secondary);
    transition: color 0.3s ease;
  }

  .contact .email,
  .contact .phone {
    font-size: 15px;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: var(--text-secondary);
    margin-bottom: 1rem;
    justify-content: center;
    transition: color 0.3s ease;
  }

  .contact .email-icon {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    opacity: 0.7;
  }

  .social-icons {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-top: 2rem;
  }

  .social-icons a {
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--bg-secondary);
    border: 1px solid var(--border-color);
    border-radius: 50%;
    transition: all 0.3s ease;
  }

  .social-icons a:hover {
    background-color: var(--color-cyan);
    border-color: var(--color-cyan);
    transform: translateY(-4px);
  }

  .social-icon {
    width: 20px;
    height: 20px;
    object-fit: contain;
  }
  </style>
  