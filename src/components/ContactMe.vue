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
      <div class="social-icons">
        <a href="https://github.com" target="_blank">
          <img src="@/assets/github-icon.png" alt="GitHub" class="social-icon">
        </a>
        <a href="https://velog.io" target="_blank">
          <img src="@/assets/velog-icon.png" alt="Velog" class="social-icon">
        </a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactMe'
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
  
  .contact {
    padding: 2rem;
    background-color: #191919;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    font-family: 'Poppins', sans-serif;
    color: white;
    margin-top: 20px;
  }
  
  .contact h2 {
    font-size: 23px;
    font-weight: 700;
    margin-left: 15rem;
    margin-bottom: 1rem;
    text-align: left;
  }
  
  .contact .description {
    font-size: 14px;
    font-weight: 300;
    line-height: 1.5;
    margin-left: 15rem;
    margin-right: 20rem;
    margin-bottom: 1.5rem;
    text-align: left;
  }
  
  .contact .email {
    font-size: 14px;
    font-weight: 600;
    display: flex;
    align-items: left;
    justify-content: left;
    text-align: left;
    margin-left: 15rem;
  }

  .contact .phone {
    font-size: 14px;
    font-weight: 600;
    display: flex;
    align-items: left;
    justify-content: left;
    text-align: left;
    margin-left: 15rem;
  }
  
  .contact .email-icon {
    text-align: left;
    width: 20px;
    height: 20px;
    margin-right: 0.5rem;
  }
  
  .social-icons {
    display: flex;
    justify-content: left;
    gap: 1rem;
    margin-top: 1.5rem;
    margin-left: 15rem;
  }
  
  .social-icon {
    width: 30px;
    height: 30px;
  }
  </style>
  